export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve static assets from the assets namespace
    if (url.pathname.startsWith('/static/')) {
      return env.ASSETS.fetch(request);
    }
    
    try {
      // Forward the request to the Next.js server
      return await env.ASSETS.fetch(request);
    } catch (e) {
      return new Response(`${e.message}\n${e.stack}`, { status: 500 });
    }
  },
};
