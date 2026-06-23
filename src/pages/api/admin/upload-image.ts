// src/pages/api/admin/upload-image.ts
import type { APIRoute } from 'astro';
import { put } from '@vercel/blob';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const tok = request.headers.get('x-admin-token') || '';
  if (tok !== import.meta.env.ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ error: '인증 실패' }), { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    if (!file) {
      return new Response(JSON.stringify({ error: '파일 없음' }), { status: 400 });
    }

    if (file.size > 10 * 1024 * 1024) {
      return new Response(JSON.stringify({ error: '파일 크기가 10MB를 초과합니다' }), { status: 400 });
    }

    const filename = `eds-services/${Date.now()}-${file.name}`;
    const blob = await put(filename, file, {
      access: 'public',
      token: import.meta.env.BLOB_READ_WRITE_TOKEN,
    });

    return new Response(JSON.stringify({ url: blob.url }), { status: 200 });

  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};
