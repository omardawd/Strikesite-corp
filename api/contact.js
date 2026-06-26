export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, role, type, message } = req.body || {};

  if (!name || !company || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, company, email, message' });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'info@strikescf.com';

  if (!apiKey) {
    console.error('RESEND_API_KEY not set');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const html = `
    <div style="font-family: 'IBM Plex Mono', monospace; font-size: 14px; color: #111318; max-width: 600px; padding: 32px; border: 1px solid #E5E7EB;">
      <div style="font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #6B7280; margin-bottom: 24px;">STRIKE SCF — NEW CONTACT SUBMISSION</div>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; width: 140px;">NAME</td><td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB;">${name}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;">COMPANY</td><td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB;">${company}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;">EMAIL</td><td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB;"><a href="mailto:${email}" style="color: #1428CC;">${email}</a></td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;">ROLE</td><td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB;">${role || '—'}</td></tr>
        <tr><td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;">TYPE</td><td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB;">${type || '—'}</td></tr>
        <tr><td style="padding: 10px 0; color: #6B7280; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; vertical-align: top;">MESSAGE</td><td style="padding: 10px 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td></tr>
      </table>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Strike SCF <noreply@strikescf.com>',
        to: [toEmail],
        reply_to: email,
        subject: `New contact: ${name} · ${company}`,
        html,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Email delivery failed' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: 'Internal error' });
  }
}
