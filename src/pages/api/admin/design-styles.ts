// src/pages/api/admin/design-styles.ts
import type { APIRoute } from 'astro';

function authCheck(request: Request) {
  return request.headers.get('x-admin-token') === import.meta.env.ADMIN_PASSWORD;
}

function getKV() {
  return {
    url: import.meta.env.KV_REST_API_URL || import.meta.env.UPSTASH_REDIS_REST_URL || '',
    token: import.meta.env.KV_REST_API_TOKEN || import.meta.env.UPSTASH_REDIS_REST_TOKEN || '',
  };
}

// GET - 스타일 불러오기
export const GET: APIRoute = async ({ url }) => {
  const { url: KV_URL, token: KV_TOKEN } = getKV();
  const section = url.searchParams.get('section') || 'about';
  try {
    const res = await fetch(`${KV_URL}/get/eds-design-${section}`, {
      headers: { Authorization: `Bearer ${KV_TOKEN}` },
    });
    const data = await res.json();
    if (!data?.result) return new Response(JSON.stringify({}), { status: 200 });
    const parsed = typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
    return new Response(JSON.stringify(parsed), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch(e) {
    return new Response(JSON.stringify({}), { status: 200 });
  }
};

// POST - 스타일 저장
export const POST: APIRoute = async ({ request }) => {
  if (!authCheck(request)) return new Response(JSON.stringify({ error: '인증 실패' }), { status: 401 });
  
  const KV_URL   = import.meta.env.KV_REST_API_URL   || import.meta.env.UPSTASH_REDIS_REST_URL;
  const KV_TOKEN = import.meta.env.KV_REST_API_TOKEN || import.meta.env.UPSTASH_REDIS_REST_TOKEN;

  if (!KV_URL || !KV_TOKEN) {
    return new Response(JSON.stringify({ error: 'KV 환경변수 없음', KV_URL: !!KV_URL, KV_TOKEN: !!KV_TOKEN }), { status: 500 });
  }

  const body = await request.json();
  const section = body.section || 'about';
  try {
    const res = await fetch(`${KV_URL}/pipeline`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${KV_TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify([['SET', `eds-design-${section}`, JSON.stringify(body)]]),
    });
    const data = await res.json();
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'KV 저장 실패', status: res.status, data }), { status: 500 });
    }
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch(e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};
