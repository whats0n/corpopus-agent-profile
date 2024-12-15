export const isSelectedDate = (
  selectedDate: Date | null,
  date: Date | null,
): boolean => {
  if (!selectedDate || !date) return false

  return (
    date.getDate() === selectedDate.getDate() &&
    date.getMonth() === selectedDate.getMonth() &&
    date.getFullYear() === selectedDate.getFullYear()
  )
}
