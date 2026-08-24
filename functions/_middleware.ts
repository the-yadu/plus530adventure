interface EventContext {
  request: Request;
  env?: { ASSETS?: { fetch: typeof fetch } };
  next: () => Promise<Response>;
}

export async function onRequest(context: EventContext): Promise<Response> {
  const request = context.request;
  const accept = request.headers.get('accept') || '';
  const url = new URL(request.url);

  // Only negotiate for GET requests on HTML/root pages, excluding existing static files like /llms-full.txt, .xml, .txt
  if (
    request.method === 'GET' &&
    accept.includes('text/markdown') &&
    !url.pathname.endsWith('.txt') &&
    !url.pathname.endsWith('.xml')
  ) {
    const llmsUrl = new URL('/llms.txt', request.url);
    const llmsResponse = context.env?.ASSETS?.fetch
      ? await context.env.ASSETS.fetch(llmsUrl.toString())
      : await fetch(llmsUrl.toString());
    
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

  const response = await context.next();
  const newResponse = new Response(response.body, response);
  newResponse.headers.set('Vary', 'Accept, Accept-Encoding');
  return newResponse;
}
