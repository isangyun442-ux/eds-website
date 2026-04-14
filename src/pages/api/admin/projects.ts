// src/pages/api/admin/projects.ts
import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

const DATA_FILE = path.resolve('src/data/projects.json');

async function readProjects() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeProjects(data: unknown) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

function authCheck(request: Request) {
  return request.headers.get('x-admin-token') === import.meta.env.ADMIN_PASSWORD;
}

// GET — 전체 목록 (인증 불필요 — 일반 방문자도 읽기 가능)
export const GET: APIRoute = async () => {
  const projects = await readProjects();
  return new Response(JSON.stringify(projects), {
    headers: { 'Content-Type': 'application/json' },
  });
};

// POST — 추가
export const POST: APIRoute = async ({ request }) => {
  if (!authCheck(request)) return new Response(JSON.stringify({ error: '인증 실패' }), { status: 401 });
  const body = await request.json();
  const projects = await readProjects();
  const newProject = {
    id: Date.now(),
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
  const idx = projects.findIndex((p: { id: number }) => p.id === body.id);
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
  const filtered = projects.filter((p: { id: number }) => p.id !== id);
  await writeProjects(filtered);
  return new Response(JSON.stringify({ ok: true }));
};
