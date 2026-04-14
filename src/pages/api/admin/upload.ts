// src/pages/api/admin/upload.ts
import type { APIRoute } from 'astro';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key:    import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

export const POST: APIRoute = async ({ request }) => {
  // 인증 확인
  const auth = request.headers.get('x-admin-token');
  if (auth !== import.meta.env.ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ error: '인증 실패' }), { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    if (!file) return new Response(JSON.stringify({ error: '파일 없음' }), { status: 400 });

    const buffer = await file.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    const dataUri = `data:${file.type};base64,${base64}`;

    const result = await cloudinary.uploader.upload(dataUri, {
      folder: 'eds-portfolio',
      resource_type: 'image',
    });

    return new Response(JSON.stringify({
      url:       result.secure_url,
      public_id: result.public_id,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: '업로드 실패' }), { status: 500 });
  }
};
