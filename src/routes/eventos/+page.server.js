
import dayjs from 'dayjs'
import eventos from '$lib/data/eventos.yaml'
import { env } from '$env/dynamic/private'
import { calendarEvents } from '../../lib/utils'

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = 'auto'

export const config = {
  isr: {
    expiration: 24 * 60
  }
}

export async function load() {
  const timeVerify = dayjs().format('DD/MM/YYYY hh:mm:ss')
  try {
    const events = await calendarEvents(env.GOOGLE_API_KEY, eventos.calendarId)

    return { events, timeVerify }
  } catch (e) {
    return { events: [], timeVerify }
  }
}

