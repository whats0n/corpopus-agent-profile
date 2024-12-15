export const isWeekend = (date: Date | null): boolean => {
  if (!date) return false

  const day = date.getDay()

  return day === 0 || day === 6
}
