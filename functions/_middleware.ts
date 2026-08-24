interface EventContext {
  request: Request;
  env: { ASSETS: { fetch: typeof fetch } };
  next: () => Promise<Response>;
}

export async function onRequest(context: EventContext): Promise<Response> {
  const request = context.request;
  const accept = request.headers.get('accept') || '';

  // Check if client explicitly requests Markdown
  if (accept.includes('text/markdown')) {
    const llmsUrl = new URL('/llms.txt', request.url);
    const assetFetcher = context.env?.ASSETS?.fetch ? context.env.ASSETS : { fetch };
    const llmsResponse = await assetFetcher.fetch(llmsUrl.toString());
    
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
