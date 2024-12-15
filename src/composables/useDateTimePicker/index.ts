import type { DateTimePickerProps } from './types'
import { useDays } from './partials/useDays'
import { useLabels } from './partials/useLabels'

export const useDateTimePicker = (
  selectedDate: Ref<Date | null>,
  props: DateTimePickerProps,
) => {
  const currentDate = ref<Date>(new Date())
  const currentMonth = computed<number>(() => currentDate.value.getMonth())
  const currentYear = computed<number>(() => currentDate.value.getFullYear())

  const labels = useLabels()

  const days = useDays({
    ...props,
    currentMonth,
    currentYear,
    selectedDate,
  })

  const prevMonth = (): void => {
    currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1)
  }

  const nextMonth = (): void => {
    currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1)
  }

  const setMonth = (month: number): void => {
    currentDate.value = new Date(currentYear.value, month, 1)
  }

  const setYear = (year: number): void => {
    currentDate.value = new Date(year, currentMonth.value, 1)
  }

  const selectDate = (date: Date | null): void => {
    if (!date) return

    props.onSelect(new Date(date))
  }

  return {
    labels,

    days,

    currentDate,
    currentMonth,
    currentYear,

    prevMonth,
    nextMonth,
    setMonth,
    setYear,

    selectDate,
  }
}
