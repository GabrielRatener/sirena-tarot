
import { invalidate } from "$app/navigation"

export function GET(req) {
  if (req.headers.get('Authorization') === `Bearer ${process.env.CRON_SECRET}`) {
    invalidate('calendar:load')

    return new Response("Success!")
  } else {
    return new Response('Not found', {
      status: 404
    })
  }
}
