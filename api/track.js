const TELEGRAM_ENDPOINT =
  'https://api.telegram.org/bot8695738913:AAFTbL8RZ3h4M6F45VbnZQL3hU1S3BEWNZk/sendMessage'
const TELEGRAM_CHAT_ID = '1621079349'
const ONE_DAY_SECONDS = 60 * 60 * 24

function getHeader(req, name) {
  const value = req.headers[name.toLowerCase()] ?? req.headers[name]

  if (Array.isArray(value)) {
    return value[0] ?? ''
  }

  return value ?? ''
}

function parseCookies(cookieHeader = '') {
  return cookieHeader.split(';').reduce((cookies, cookie) => {
    const [rawName, ...rawValue] = cookie.trim().split('=')

    if (!rawName) {
      return cookies
    }

    try {
      cookies[rawName] = decodeURIComponent(rawValue.join('=') || '')
    } catch {
      cookies[rawName] = rawValue.join('=') || ''
    }

    return cookies
  }, {})
}

function getSource(req) {
  const rawFrom = Array.isArray(req.query?.from) ? req.query.from[0] : req.query?.from
  const source = typeof rawFrom === 'string' && rawFrom.trim() ? rawFrom.trim() : 'trực tiếp'

  return source.slice(0, 120)
}

async function sendTelegramMessage(text) {
  const response = await fetch(TELEGRAM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
    }),
  })

  if (!response.ok) {
    const detail = await response.text().catch(() => '')
    throw new Error(`Telegram request failed: ${response.status} ${detail}`)
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  try {
    const cookies = parseCookies(getHeader(req, 'cookie'))
    const hasVisited = cookies.visited === 'true'

    res.setHeader(
      'Set-Cookie',
      `visited=true; Max-Age=${ONE_DAY_SECONDS}; Path=/; HttpOnly; SameSite=Lax; Secure`,
    )

    if (hasVisited) {
      return res.status(200).json({ ok: true, visitor: 'returning', notified: false })
    }

    const forwardedFor = getHeader(req, 'x-forwarded-for')
    const ip = forwardedFor.split(',')[0]?.trim() || 'unknown'
    const userAgent = getHeader(req, 'user-agent') || 'unknown'
    const country = getHeader(req, 'x-vercel-ip-country') || 'unknown'
    const source = getSource(req)
    const timestamp = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })

    const message = [
      '🚀 CÓ NGƯỜI XEM CV!',
      '',
      '👤 NGƯỜI MỚI',
      `🌍 Quốc gia: ${country}`,
      `🌐 IP: ${ip}`,
      `📱 Thiết bị: ${userAgent}`,
      `🔗 Nguồn: ${source}`,
      `⏰ Thời gian: ${timestamp}`,
    ].join('\n')

    await sendTelegramMessage(message)

    return res.status(200).json({ ok: true, visitor: 'new', notified: true })
  } catch (error) {
    console.error('Visitor tracking failed:', error)
    return res.status(200).json({ ok: false, notified: false })
  }
}
