// src/pages/api/admin/upload.ts
import type { APIRoute } from 'astro';
import { put } from '@vercel/blob';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const auth = request.headers.get('x-admin-token');
  if (auth !== import.meta.env.ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ error: '인증 실패' }), { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    if (!file) return new Response(JSON.stringify({ error: '파일 없음' }), { status: 400 });

    const filename = `eds-portfolio/${Date.now()}-${file.name}`;
    const blob = await put(filename, file, {
      access: 'public',
      token: import.meta.env.BLOB_READ_WRITE_TOKEN,
    });

    return new Response(JSON.stringify({ url: blob.url, public_id: blob.pathname }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: any) {
    console.error(e);
    return new Response(JSON.stringify({ error: '업로드 실패' }), { status: 500 });
  }
};
