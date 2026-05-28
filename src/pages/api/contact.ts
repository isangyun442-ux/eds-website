// src/pages/api/contact.ts
import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const body = await request.json();
    const { company, name, phone, email, type, message } = body;

    // 필수값 검증
    if (!company || !name || !phone) {
      return new Response(JSON.stringify({ error: '필수 항목 누락' }), { status: 400 });
    }

    const now = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
    const id  = Date.now().toString();

    // ── 1. Resend 이메일 발송 ──
    const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
    const TO_EMAIL       = import.meta.env.CONTACT_TO_EMAIL || 'pub@edamst.com';

    if (RESEND_API_KEY) {
      const html = `
        <div style="font-family:'Noto Sans KR',sans-serif;max-width:560px;margin:0 auto;background:#f7f9ff;padding:32px 0;">
          <div style="background:#1a2f8a;padding:28px 32px;border-radius:12px 12px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:20px;font-weight:900;letter-spacing:-.02em;">📬 새 도입문의가 접수됐습니다</h2>
            <p style="color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:13px;">${now}</p>
          </div>
          <div style="background:#fff;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f4fb;font-size:12px;color:#999;width:90px;font-weight:700;">회사명</td><td style="padding:10px 0;border-bottom:1px solid #f0f4fb;font-size:15px;color:#0d1a3a;font-weight:700;">${company}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f4fb;font-size:12px;color:#999;font-weight:700;">담당자</td><td style="padding:10px 0;border-bottom:1px solid #f0f4fb;font-size:15px;color:#0d1a3a;">${name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f4fb;font-size:12px;color:#999;font-weight:700;">연락처</td><td style="padding:10px 0;border-bottom:1px solid #f0f4fb;font-size:15px;color:#0d1a3a;"><a href="tel:${phone}" style="color:#1a2f8a;">${phone}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f4fb;font-size:12px;color:#999;font-weight:700;">이메일</td><td style="padding:10px 0;border-bottom:1px solid #f0f4fb;font-size:15px;color:#0d1a3a;">${email || '-'}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f4fb;font-size:12px;color:#999;font-weight:700;">문의 유형</td><td style="padding:10px 0;border-bottom:1px solid #f0f4fb;"><span style="background:rgba(26,47,138,0.1);color:#1a2f8a;padding:3px 10px;border-radius:50px;font-size:12px;font-weight:700;">${type || '-'}</span></td></tr>
              <tr><td style="padding:10px 0;font-size:12px;color:#999;font-weight:700;vertical-align:top;padding-top:14px;">문의 내용</td><td style="padding:10px 0;font-size:14px;color:#333;line-height:1.8;padding-top:14px;white-space:pre-wrap;">${message || '-'}</td></tr>
            </table>
            <div style="margin-top:24px;padding:16px;background:#f7f9ff;border-radius:8px;font-size:12px;color:#8896a4;text-align:center;">
              이담에스티 웹사이트 도입문의 폼에서 발송된 메일입니다
            </div>
          </div>
        </div>
      `;

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'EDS 이담에스티 웹사이트 <onboarding@resend.dev>',
          to: [TO_EMAIL],
          subject: `[도입문의] ${company} · ${name} (${type || '유형 미선택'})`,
          html,
        }),
      });
    }

    // ── 2. KV 저장 (어드민 대시보드 확인용) ──
    const kv = (locals as any).runtime?.env?.EDS_KV;
    if (kv) {
      const entry = { id, company, name, phone, email, type, message, createdAt: now };
      await kv.put(`inquiry:${id}`, JSON.stringify(entry));

      // 목록 인덱스 갱신
      const listRaw = await kv.get('inquiry:list');
      const list: string[] = listRaw ? JSON.parse(listRaw) : [];
      list.unshift(id);
      if (list.length > 200) list.pop(); // 최대 200건
      await kv.put('inquiry:list', JSON.stringify(list));
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });

  } catch (e) {
    console.error('contact API error:', e);
    return new Response(JSON.stringify({ error: 'server error' }), { status: 500 });
  }
};
