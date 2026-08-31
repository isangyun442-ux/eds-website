import { put } from '@vercel/blob';
import { readFileSync } from 'fs';

const envText = readFileSync('.env.local', 'utf-8');
const match = envText.match(/^BLOB_READ_WRITE_TOKEN=(.+)$/m);
const token = match ? match[1].trim().replace(/^["']|["']$/g, '') : null;
if (!token) {
  console.error('BLOB_READ_WRITE_TOKEN not found in .env.local');
  process.exit(1);
}

const filePath = process.argv[2] || 'public/videos/main.mp4';
const fileBuffer = readFileSync(filePath);
const pathname = `eds-hero/${Date.now()}-main.mp4`;

console.log(`Uploading ${filePath} (${(fileBuffer.length / 1024 / 1024).toFixed(1)}MB) as ${pathname}...`);

const blob = await put(pathname, fileBuffer, {
  access: 'public',
  token,
  contentType: 'video/mp4',
});

console.log('Done:', JSON.stringify(blob, null, 2));
