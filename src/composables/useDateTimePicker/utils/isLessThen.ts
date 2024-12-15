import { normalizeDate } from './normalizeDate'

export const isLessThan = (date: Date | null, maxDate: Date): boolean => {
  if (!date) return false

  return normalizeDate(date) < normalizeDate(maxDate)
}
