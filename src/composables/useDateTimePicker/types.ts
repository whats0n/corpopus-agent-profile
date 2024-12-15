export interface DateTimePickerLabels {
  weekdays: string[]
  months: string[]
}

export interface DateTimePickerDay {
  date: Date
  isDisabled: boolean
  isToday: boolean
  isSelectedDate: boolean
}

export interface DateTimePickerProps {
  minDate: Ref<Date | null>
  maxDate: Ref<Date | null>
  format: Ref<string | undefined>
  noToday: Ref<boolean>
  noWeekends: Ref<boolean>
  onSelect(date: Date | null): void
}
