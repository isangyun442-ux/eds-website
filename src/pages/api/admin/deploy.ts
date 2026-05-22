// src/pages/api/admin/deploy.ts
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const token = request.headers.get('x-admin-token');
  if (token !== import.meta.env.ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ error: '인증 실패' }), { status: 401 });
  }

  const hookUrl = import.meta.env.DEPLOY_HOOK_URL;
  if (!hookUrl) {
    return new Response(JSON.stringify({ error: 'DEPLOY_HOOK_URL 환경변수 없음' }), { status: 500 });
  }

  try {
    const r = await fetch(hookUrl, { method: 'POST' });
    if (r.ok) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: '배포 실패' }), { status: 500 });
    }
  } catch(e) {
    return new Response(JSON.stringify({ error: '배포 오류' }), { status: 500 });
  }
};
