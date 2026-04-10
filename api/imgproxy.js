// C:\eds-website\api\imgproxy.js 에 저장하세요
export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).send('url required');

  // edamst.com 이미지만 허용
  if (!url.startsWith('http://www.edamst.com/wp-content/uploads/')) {
    return res.status(403).send('forbidden');
  }

  try {
    const response = await fetch(url);
    if (!response.ok) return res.status(404).send('not found');

    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(Buffer.from(buffer));
  } catch (e) {
    res.status(500).send('error');
  }
}
