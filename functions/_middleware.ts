interface EventContext {
  request: Request;
  next: () => Promise<Response>;
}

export async function onRequest(context: EventContext): Promise<Response> {
  const request = context.request;
  const accept = request.headers.get('accept') || '';

  // Check if client explicitly requests Markdown
  if (accept.includes('text/markdown')) {
    const llmsUrl = new URL('/llms.txt', request.url);
    const llmsResponse = await fetch(llmsUrl.toString());
    
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
  response.headers.set('Vary', 'Accept, Accept-Encoding');
  return response;
}
