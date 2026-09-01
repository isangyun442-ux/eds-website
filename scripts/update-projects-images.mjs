import { readFileSync } from 'fs';

const envText = readFileSync('.env.local', 'utf-8');
function getEnv(name) {
  const m = envText.match(new RegExp(`^${name}=(.+)$`, 'm'));
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : null;
}
const KV_URL = getEnv('KV_REST_API_URL');
const KV_TOKEN = getEnv('KV_REST_API_TOKEN');
const mapping = JSON.parse(readFileSync('scripts/restore-mapping.json', 'utf-8'));

const res = await fetch(`${KV_URL}/get/eds-projects`, {
  headers: { Authorization: `Bearer ${KV_TOKEN}` },
});
const data = await res.json();
const projects = typeof data.result === 'string' ? JSON.parse(data.result) : data.result;

let updated = 0;
for (const p of projects) {
  const fix = mapping[String(p.id)];
  if (fix) {
    p.images = fix.images;
    updated++;
  }
}
console.log(`Updated ${updated} of ${Object.keys(mapping).length} expected projects`);

const putRes = await fetch(`${KV_URL}/pipeline`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${KV_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify([['SET', 'eds-projects', JSON.stringify(projects)]]),
});
const putData = await putRes.json();
console.log('Write result:', JSON.stringify(putData));
