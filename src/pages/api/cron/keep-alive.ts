// src/pages/api/cron/keep-alive.ts
import type { APIRoute } from 'astro';

const KV_URL   = import.meta.env.KV_REST_API_URL   || import.meta.env.UPSTASH_REDIS_REST_URL;
const KV_TOKEN = import.meta.env.KV_REST_API_TOKEN || import.meta.env.UPSTASH_REDIS_REST_TOKEN;

export const GET: APIRoute = async ({ request }) => {
  // Vercel Cron 인증 확인
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${import.meta.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    // DB에 핑 보내기
    const res = await fetch(`${KV_URL}/ping`, {
      headers: { Authorization: `Bearer ${KV_TOKEN}` },
    });
    const data = await res.text();
    console.log('Keep-alive ping:', data);
    return new Response(JSON.stringify({ ok: true, ping: data, time: new Date().toISOString() }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch(e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};
