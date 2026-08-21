// src/pages/api/admin/projects.ts
import type { APIRoute } from 'astro';
import { projects as HARDCODED_PROJECTS } from '../../../data/projects.js';

const KV_URL   = import.meta.env.KV_REST_API_URL   || import.meta.env.UPSTASH_REDIS_REST_URL;
const KV_TOKEN = import.meta.env.KV_REST_API_TOKEN || import.meta.env.UPSTASH_REDIS_REST_TOKEN;
const KEY = 'eds-projects';

async function readProjects(): Promise<any[]> {
  try {
    const res = await fetch(`${KV_URL}/get/${KEY}`, {
      headers: { Authorization: `Bearer ${KV_TOKEN}` },
    });
    const data = await res.json();

    // KV가 비어있으면 하드코딩 데이터를 자동으로 KV에 저장
    if (!data || !data.result) {
      await writeProjects(HARDCODED_PROJECTS);
      return HARDCODED_PROJECTS;
    }

    const parsed = typeof data.result === 'string'
      ? JSON.parse(data.result)
      : data.result;

    // 빈 배열이면 하드코딩 데이터로 자동 시딩
    if (!Array.isArray(parsed) || parsed.length === 0) {
      await writeProjects(HARDCODED_PROJECTS);
      return HARDCODED_PROJECTS;
    }

    return parsed;
  } catch (e) {
    console.error('readProjects error:', e);
    return HARDCODED_PROJECTS;
  }
}

async function writeProjects(projects: any[]) {
  try {
    const res = await fetch(`${KV_URL}/pipeline`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${KV_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([['SET', KEY, JSON.stringify(projects)]]),
    });
    const data = await res.json();
    console.log('writeProjects result:', data);
  } catch (e) {
    console.error('writeProjects error:', e);
  }
}

function authCheck(request: Request) {
  return request.headers.get('x-admin-token') === import.meta.env.ADMIN_PASSWORD;
}

// GET — 전체 목록 (인증 불필요)
export const GET: APIRoute = async () => {
  const projects = await readProjects();
  return new Response(JSON.stringify(projects), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Pragma': 'no-cache',
    },
  });
};

// POST — 추가
export const POST: APIRoute = async ({ request }) => {
  if (!authCheck(request)) return new Response(JSON.stringify({ error: '인증 실패' }), { status: 401 });
  const body = await request.json();
  const projects = await readProjects();
  const newProject = {
    id:       Date.now(),
    title:    body.title    || '',
    service:  body.service  || '',
    client:   body.client   || '',
    date:     body.date     || '',
    overview: body.overview || '',
    images:   body.images   || [],
  };
  projects.unshift(newProject);
  await writeProjects(projects);
  return new Response(JSON.stringify(newProject), { status: 201 });
};

// PUT — 수정
export const PUT: APIRoute = async ({ request }) => {
  if (!authCheck(request)) return new Response(JSON.stringify({ error: '인증 실패' }), { status: 401 });
  const body = await request.json();
  const projects = await readProjects();
  const idx = projects.findIndex((p: any) => p.id === body.id);
  if (idx === -1) return new Response(JSON.stringify({ error: '없음' }), { status: 404 });
  projects[idx] = { ...projects[idx], ...body };
  await writeProjects(projects);
  return new Response(JSON.stringify(projects[idx]));
};

// DELETE — 삭제
export const DELETE: APIRoute = async ({ request }) => {
  if (!authCheck(request)) return new Response(JSON.stringify({ error: '인증 실패' }), { status: 401 });
  const { id } = await request.json();
  const projects = await readProjects();
  const filtered = projects.filter((p: any) => p.id !== id);
  await writeProjects(filtered);
  return new Response(JSON.stringify({ ok: true }));
};
