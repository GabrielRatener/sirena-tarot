
const formatters = [
  {
    code: '+52',
    country: "MX",
    format: (number) =>
      `${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`
  }
]

export const formatNumber = (number, withCountry = true) => {
  const code =
    number.slice(0, 3)
      .replace(/^0+/, '+')
  console.log('format', code)
  const formatter = formatters.find((formatter) => formatter.code === code)
  const localFormatted = formatter.format(number.slice(3))

  return withCountry ? `${code} ${localFormatted}` : localFormatted
}
