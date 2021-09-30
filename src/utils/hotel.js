export const convertToRubles = ($) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumSignificantDigits: 10,
  }).format(Math.round($ * 73))
}

export const getDay = (daySkip = 0) => {
  const result = new Date(new Date().getTime() + daySkip * 60 * 60 * 24 * 1000)
  return formatDate(result)
}

export const formatDate = (date) => {
  return new Date(date).toISOString().split('T')[0]
}

export const getDaysQuantity = (from, to) =>
  Math.ceil(
    (new Date(to).getTime() - new Date(from).getTime()) / (1000 * 60 * 60 * 24)
  )

export const shortDate = (date) => {
  let monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  let day = date.getDate()

  let monthIndex = date.getMonth()
  let monthName = monthNames[monthIndex]

  let year = date.getFullYear()

  return `${day} ${monthName} ${year}`
}
