import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, service, source, timestamp } = body

    const serviceLabels: Record<string, string> = {
      restaurant: '🍽️ مطعم / كافيه',
      hotel: '🏨 فندق / رياض',
      catering: '🎪 تقديم طعام',
      home: '🏠 منزل',
      other: '📦 أخرى',
    }
    const serviceLabel = serviceLabels[service] || service
    const time = new Date(timestamp || Date.now()).toLocaleString('ar-MA', { timeZone: 'Africa/Casablanca' })

    // Telegram notification
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (token && chatId) {
      const message = `
🌿 <b>طلب جديد — الماس</b>

👤 <b>الاسم:</b> ${name}
📱 <b>الهاتف:</b> ${phone}
📋 <b>النوع:</b> ${serviceLabel}
🌐 <b>المصدر:</b> ${source || 'موقع الويب'}
🕐 <b>التوقيت:</b> ${time}
      `.trim()

      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' }),
      })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 })
  }
}
