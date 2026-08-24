interface EventContext {
  request: Request;
  env?: { ASSETS?: { fetch: typeof fetch } };
  next: () => Promise<Response>;
}

export async function onRequest(context: EventContext): Promise<Response> {
  const request = context.request;
  const accept = request.headers.get('accept') || '';
  const url = new URL(request.url);

  const fetchAsset = async (path: string) => {
    const targetUrl = new URL(path, request.url);
    return context.env?.ASSETS?.fetch
      ? await context.env.ASSETS.fetch(targetUrl.toString())
      : await fetch(targetUrl.toString());
  };

  // 1. Markdown Content Negotiation
  if (
    request.method === 'GET' &&
    accept.includes('text/markdown') &&
    !url.pathname.endsWith('.txt') &&
    !url.pathname.endsWith('.xml')
  ) {
    const llmsResponse = await fetchAsset('/llms.txt');
    if (llmsResponse.ok) {
      const body = await llmsResponse.text();
      return new Response(body, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept, Accept-Encoding',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  }

  // 2. Fetch standard response from Cloudflare Pages static assets
  let response = await context.next();

  // 3. Explicit HTTP 404 handling if status is 404
  if (response.status === 404) {
    const page404 = await fetchAsset('/404.html');
    if (page404.ok) {
      const body = await page404.text();
      return new Response(body, {
        status: 404,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Vary': 'Accept, Accept-Encoding',
        },
      });
    }
  }

  // 4. SPA Soft-404 Override: If SPA mode returns 200 for a non-existent static route, verify exact asset existence
  if (
    request.method === 'GET' &&
    response.status === 200 &&
    !url.pathname.startsWith('/_astro/') &&
    !url.pathname.startsWith('/images/') &&
    url.pathname !== '/' &&
    url.pathname !== '/index.html' &&
    url.pathname !== '/robots.txt' &&
    url.pathname !== '/favicon.ico' &&
    url.pathname !== '/logo.png' &&
    !url.pathname.endsWith('.xml') &&
    !url.pathname.endsWith('.txt')
  ) {
    let cleanPath = url.pathname;
    if (cleanPath.endsWith('/')) {
      cleanPath += 'index.html';
    } else if (!cleanPath.includes('.')) {
      cleanPath += '/index.html';
    }

    const rawAsset = await fetchAsset(cleanPath);
    if (rawAsset.status === 404) {
      const page404 = await fetchAsset('/404.html');
      if (page404.ok) {
        const body = await page404.text();
        return new Response(body, {
          status: 404,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Vary': 'Accept, Accept-Encoding',
          },
        });
      }
    }
  }

  const newResponse = new Response(response.body, response);
  newResponse.headers.set('Vary', 'Accept, Accept-Encoding');
  return newResponse;
}
