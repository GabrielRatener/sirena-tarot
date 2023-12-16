
import dayjs from 'dayjs'
import eventos from '$lib/data/eventos.yaml'
import { env } from '$env/dynamic/private'
import { calendarEvents } from '../../lib/utils'

const expiration = 60 // in seconds

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true

export async function load({ depends }) {
  const timestamp = Date.now()
  const expires = timestamp + expiration * 1000
  let events = []

  depends(`ts:${timestamp}`)

  try {
    events = await calendarEvents(env.GOOGLE_API_KEY, eventos.calendarId)
  } finally {
    return { events, timestamp, expires }
  }
}
