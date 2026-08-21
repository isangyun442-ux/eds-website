// src/pages/api/admin/migrate-projects.ts
import type { APIRoute } from 'astro';
import { projects as HARDCODED_PROJECTS } from '../../../data/projects.js';

const KV_URL   = import.meta.env.KV_REST_API_URL   || import.meta.env.UPSTASH_REDIS_REST_URL;
const KV_TOKEN = import.meta.env.KV_REST_API_TOKEN || import.meta.env.UPSTASH_REDIS_REST_TOKEN;
const KEY = 'eds-projects';

function authCheck(request: Request) {
  return request.headers.get('x-admin-token') === import.meta.env.ADMIN_PASSWORD;
}

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (!authCheck(request)) {
    return new Response(JSON.stringify({ error: '인증 실패' }), { status: 401 });
  }

  try {
    // 기존 KV 데이터 확인
    const existRes = await fetch(`${KV_URL}/get/${KEY}`, {
      headers: { Authorization: `Bearer ${KV_TOKEN}` },
    });
    const existData = await existRes.json();
    const existingProjects = existData?.result
      ? (typeof existData.result === 'string' ? JSON.parse(existData.result) : existData.result)
      : [];

    // 기존 KV에 없는 것만 추가 (중복 방지)
    const existingIds = new Set(existingProjects.map((p: any) => p.id));
    const newOnes = HARDCODED_PROJECTS.filter((p: any) => !existingIds.has(p.id));
    const merged = [...existingProjects, ...newOnes];

    // KV에 저장
    await fetch(`${KV_URL}/pipeline`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${KV_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([['SET', KEY, JSON.stringify(merged)]]),
    });

    return new Response(JSON.stringify({
      ok: true,
      total: merged.length,
      added: newOnes.length,
      existing: existingProjects.length,
    }), { status: 200 });

  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};
