import type { DateTimePickerLabels } from '../types'

export const useLabels = (): DateTimePickerLabels => {
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return {
    weekdays,
    months,
  }
}
