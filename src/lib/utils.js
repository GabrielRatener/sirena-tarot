import axios from 'axios'
import dayjs from 'dayjs'
import utcPlugin from 'dayjs/plugin/utc'
import tzPlugin from 'dayjs/plugin/timezone'

dayjs.extend(utcPlugin)
dayjs.extend(tzPlugin)

const dayNames = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
]

const dayCodes = [
  'su',
  'mo',
  'tu',
  'we',
  'th',
  'fr',
  'sa'
]

const formatters = [
  {
    code: '+52',
    country: "MX",
    format: (number) =>
      `${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`
  }
]

export const toQuery = (params) =>
  Object.entries(params)
    .map(([param, value]) => `${param}=${value}`)
    .join('&')

export const formatNumber = (number, withCountry = true) => {
  const code =
    number.slice(0, 3)
      .replace(/^0+/, '+')

  const formatter = formatters.find((formatter) => formatter.code === code)
  const localFormatted = formatter.format(number.slice(3))

  return withCountry ? `${code} ${localFormatted}` : localFormatted
}

export const calendarEvents = async (key, calendarId) => {
  const paramString = toQuery({
    key,
    timeMin: dayjs().toISOString()
  })

  const url =
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?${paramString}`
  const response = await axios({ url })
  return response.data.items
    .filter((item) => item.status === 'confirmed')
    .map((item) => {
      const dias = []
      const rule = item.recurrence?.find((rule) => rule.startsWith('RRULE:FREQ=WEEKLY'))

      if (rule) {
        const spec =
          rule.split(';')
            .reduce((obj, varSpec) => {
              const [name, val] = varSpec.split('=')

              return {
                ...obj,
                [name]: val
              }
            }, {})
        const codes = spec.BYDAY.split(',')
        for (const code of codes) {
          const index = dayCodes.indexOf(code.toLowerCase())
          dias.push(dayNames[index])
        }
      }

      return {
        id: item.id,
        tz: item.start.timeZone,
        titulo: item.summary,
        descripcion: item.description,
        ubicacion: item.location,
        start: item.start.dateTime,
        end: item.end.dateTime,
        dias
      }
    })
}

const dia = (date, tz) => {
  const index = parseInt(dayjs(date).tz(tz).format('d'))

  return dayNames[index]
}

export const parseLocation = (string) => {
  return string.split(', ')
}

export const getLocationHead = (string) => {
  const [first] = parseLocation(string)

  return first
}

export const formatEventTime = ({ dias, start, end, tz }) => {
  const startDate = dayjs(start).tz(tz)
  const endDate = dayjs(end).tz(tz)
  const timeRange = [
    startDate.format('h:mm A'),
    endDate.format('h:mm A')
  ].join(' - ')

  const diasPlural = dias.map((dia) =>
    dia[dia.length - 1] === 's' ? dia : `${dia}s` 
  )

  switch (dias.length) {
    case 0:
      return [`${dia(start, tz)} ${startDate.format('MMM DD')}`, timeRange]
    case 1:
      return [diasPlural[0], timeRange]
    case 2:
      return [diasPlural.join(' y '), timeRange]
    default:
      return [diasPlural.join(', '), timeRange]
  }
}
