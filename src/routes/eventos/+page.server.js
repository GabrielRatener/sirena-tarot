
import eventos from '$lib/data/eventos.yaml'
import { env } from '$env/dynamic/private'
import { calendarEvents } from '../../lib/utils'

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = 'auto'

export async function load({ url }) {
  const field = env.CRON_SECRET
  const value = url.searchParams.get(field)
  const timestamp = Date.now()
  let events = []

  console.log(`Running load function with field "${field}" = "${value}"`)

  try {
    events = await calendarEvents(env.GOOGLE_API_KEY, eventos.calendarId)
  } finally {
    return { events, timestamp }
  }
}
