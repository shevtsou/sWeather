import moment from 'moment'

export function formatDate(date) {
  return moment(date).format('MMM D')
}

export function getDayOfWeek(date) {
  const today = moment()
  const tomorrow = moment().add(1, 'day')
  const dateMoment = moment(date)
  if (today.isSame(dateMoment, 'date')) {
    return 'Today'
  }
  if (today.isSame(tomorrow, 'date')) {
    return 'Tomorrow'
  }
  return moment(date).format('ddd')
}
