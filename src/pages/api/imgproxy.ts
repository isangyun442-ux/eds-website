// C:\eds-website\src\pages\api\imgproxy.ts 에 저장하세요
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const imgUrl = url.searchParams.get('url');

  if (!imgUrl) {
    return new Response('url required', { status: 400 });
  }

  if (!imgUrl.startsWith('http://www.edamst.com/wp-content/uploads/')) {
    return new Response('forbidden', { status: 403 });
  }

  try {
    const response = await fetch(imgUrl);
    if (!response.ok) return new Response('not found', { status: 404 });

    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (e) {
    return new Response('error', { status: 500 });
  }
};
