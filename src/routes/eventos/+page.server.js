
import eventos from '$lib/data/eventos.yaml'
import { env } from '$env/dynamic/private'
import { calendarEvents } from '../../lib/utils'

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true

export const config = {
  isr: {
    isr: {
      expiration: 60,
      bypassToken: env.CRON_SECRET,
    }
  }
}

export async function load() {
  const timestamp = Date.now()
  let events = []

  try {
    events = await calendarEvents(env.GOOGLE_API_KEY, eventos.calendarId)
  } finally {
    return { events, timestamp }
  }
}
