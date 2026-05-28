// src/pages/api/admin/upload-image.ts
import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // 어드민 토큰 확인
  const tok = request.headers.get('x-admin-token') || '';
  const validTok = import.meta.env.ADMIN_TOKEN || 'eds-admin-2024';
  if (tok !== validTok) {
    return new Response(JSON.stringify({ error: '인증 실패' }), { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    if (!file) {
      return new Response(JSON.stringify({ error: '파일 없음' }), { status: 400 });
    }

    // 파일 크기 제한 (10MB)
    if (file.size > 10 * 1024 * 1024) {
      return new Response(JSON.stringify({ error: '파일 크기가 10MB를 초과합니다' }), { status: 400 });
    }

    const CLOUD_NAME  = import.meta.env.CLOUDINARY_CLOUD_NAME;
    const API_KEY     = import.meta.env.CLOUDINARY_API_KEY;
    const API_SECRET  = import.meta.env.CLOUDINARY_API_SECRET;

    if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
      return new Response(JSON.stringify({ error: 'Cloudinary 환경변수 미설정' }), { status: 500 });
    }

    // Cloudinary 서명 생성
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const folder    = 'eds-services';
    const strToSign = `folder=${folder}&timestamp=${timestamp}${API_SECRET}`;

    // SHA-1 서명
    const msgBuffer = new TextEncoder().encode(strToSign);
    const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);
    const signature  = Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0')).join('');

    // Cloudinary 업로드
    const uploadForm = new FormData();
    uploadForm.append('file', file);
    uploadForm.append('api_key', API_KEY);
    uploadForm.append('timestamp', timestamp);
    uploadForm.append('signature', signature);
    uploadForm.append('folder', folder);

    const uploadRes = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: 'POST', body: uploadForm }
    );
    const uploadData = await uploadRes.json();

    if (!uploadRes.ok || !uploadData.secure_url) {
      return new Response(JSON.stringify({ error: uploadData.error?.message || '업로드 실패' }), { status: 500 });
    }

    return new Response(JSON.stringify({ url: uploadData.secure_url }), { status: 200 });

  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};
