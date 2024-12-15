import { normalizeDate } from './normalizeDate'

export const isGreaterThan = (date: Date | null, minDate: Date): boolean => {
  if (!date) return false

  return normalizeDate(date) > normalizeDate(minDate)
}
