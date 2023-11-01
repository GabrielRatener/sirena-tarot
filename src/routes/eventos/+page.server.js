import eventos from '$lib/data/eventos.yaml'
import { env } from '$env/dynamic/private'
import { calendarEvents } from '../../lib/utils';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load() {
  try {
    const events = await calendarEvents(env.GOOGLE_API_KEY, eventos.calendarId)

    return { events }
  } catch (e) {
    return { events: [] }
  }
}

