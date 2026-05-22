// src/pages/api/admin/auth.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  const token = request.headers.get('x-admin-token');
  if (token !== import.meta.env.ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ error: '인증 실패' }), { status: 401 });
  }
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
