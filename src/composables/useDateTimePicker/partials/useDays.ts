import { isSelectedDate } from '../utils/isSelected'
import { isToday } from '../utils/isToday'
import type { DateTimePickerDay, DateTimePickerProps } from '../types'
import { isWeekend } from '../utils/isWeekend'
import { isLessThan } from '../utils/isLessThen'
import { isGreaterThan } from '../utils/isGreaterThen'

export const useDays = ({
  currentYear,
  currentMonth,
  minDate,
  maxDate,
  noToday,
  noWeekends,
  selectedDate,
}: DateTimePickerProps & {
  currentYear: Ref<number>
  currentMonth: Ref<number>
  selectedDate: Ref<Date | null>
}) => {
  return computed<DateTimePickerDay[]>(() => {
    const days: DateTimePickerDay[] = []
    const startOfMonth = new Date(currentYear.value, currentMonth.value, 1)
    const endOfMonth = new Date(currentYear.value, currentMonth.value + 1, 0)

    const firstDayIndex = (startOfMonth.getDay() + 6) % 7

    const prevMonthEnd = new Date(currentYear.value, currentMonth.value, 0)

    const isDisabled = (date: Date): boolean => {
      return (
        (!!minDate.value && isLessThan(date, minDate.value)) ||
        (!!maxDate.value && isGreaterThan(date, maxDate.value)) ||
        (noToday.value && isToday(date)) ||
        (noWeekends.value && isWeekend(date))
      )
    }

    for (let i = firstDayIndex; i > 0; i--) {
      const date = new Date(
        currentYear.value,
        currentMonth.value - 1,
        prevMonthEnd.getDate() - i + 1,
      )
      days.push({
        date,
        isDisabled: isDisabled(date),
        isToday: isToday(date),
        isSelectedDate: isSelectedDate(selectedDate.value, date),
      })
    }

    for (let i = 1; i <= endOfMonth.getDate(); i++) {
      const date = new Date(currentYear.value, currentMonth.value, i)

      days.push({
        date,
        isDisabled: isDisabled(date),
        isToday: isToday(date),
        isSelectedDate: isSelectedDate(selectedDate.value, date),
      })
    }

    const lastDayIndex = (endOfMonth.getDay() + 6) % 7

    const nextMonthDays = 6 - lastDayIndex

    for (let i = 1; i <= nextMonthDays; i++) {
      const date = new Date(currentYear.value, currentMonth.value + 1, i)
      days.push({
        date,
        isDisabled: isDisabled(date),
        isToday: isToday(date),
        isSelectedDate: isSelectedDate(selectedDate.value, date),
      })
    }

    return days
  })
}
