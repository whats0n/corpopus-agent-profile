<template>
  <div :class="$style.datepicker">
    <slot name="header" />
    <div :class="$style.container">
      <UiDateTimePickerDateView
        v-if="view === Views.SELECT_DAY"
        :current-month="labels.months[currentMonth]"
        :current-year="currentYear"
        :days="days"
        :weekdays="labels.weekdays"
        @prev="prevMonth"
        @next="nextMonth"
        @month="view = Views.SELECT_MONTH"
        @year="view = Views.SELECT_YEAR"
        @select="selectDate"
      />
      <UiDateTimePickerGridView
        v-else-if="view === Views.SELECT_MONTH"
        :title="labels.months[currentMonth]"
        :items="months"
        :selected="currentMonth"
        @back="view = Views.SELECT_DAY"
        @select="selectMonth($event.id)"
      />
      <UiDateTimePickerGridView
        v-else-if="view === Views.SELECT_YEAR"
        :title="currentYear"
        :items="years"
        :selected="currentYear"
        @back="view = Views.SELECT_DAY"
        @select="selectYear($event.id)"
      />
    </div>
    <slot name="footer" />
  </div>
</template>

<script lang="ts" setup>
import { useDateTimePicker } from '~/composables/useDateTimePicker'

const modelValue = defineModel<Date | null>({ required: true })

const props = defineProps<{
  minDate?: Date | null
  maxDate?: Date | null
  format?: string
  noToday?: boolean
  noWeekends?: boolean
  placeholder?: string
  invalid?: boolean
  disabled?: boolean
}>()

const {
  labels,
  days,
  currentMonth,
  currentYear,
  prevMonth,
  nextMonth,
  setMonth,
  setYear,
  selectDate,
} = useDateTimePicker(modelValue, {
  minDate: computed(() => props.minDate || null),
  maxDate: computed(() => props.maxDate || null),
  format: computed(() => props.format),
  noToday: computed(() => !!props.noToday),
  noWeekends: computed(() => !!props.noWeekends),
  onSelect(date) {
    modelValue.value = date
  },
})

enum Views {
  SELECT_DAY = 1,
  SELECT_MONTH = 2,
  SELECT_YEAR = 3,
}

const view = ref<Views>(Views.SELECT_DAY)

interface GridItem {
  id: number
  text: string
}

const months = computed<GridItem[]>(() =>
  Array.from({ length: 12 }, (_, index) => ({
    id: index,
    text: labels.months[index],
  })),
)

const selectMonth = (month: number): void => {
  setMonth(month)
  view.value = Views.SELECT_DAY
}

const years = computed<GridItem[]>(() => {
  const startYear = currentYear.value - 100
  const endYear = currentYear.value + 100

  return Array.from({ length: endYear - startYear + 1 }, (_, index) => {
    const year = startYear + index
    return { id: year, text: year.toString() }
  })
})

const selectYear = (year: number): void => {
  setYear(year)
  view.value = Views.SELECT_DAY
}
</script>

<style module lang="scss">
.datepicker {
  display: grid;
  padding: var(--datepicker-padding, 24px);
  gap: 16px;
  color: var(--gray-700);

  @include helpers.media($from: sm, $to: md) {
    margin-inline: auto;
    max-width: 400px;
  }

  @include helpers.media(sm) {
    background: #fff;
    border: 1px solid var(--gray-300);
    box-shadow: 0px 24px 48px -12px rgba(10, 13, 18, 0.18),
      0px 4px 4px -2px rgba(10, 13, 18, 0.04);
    border-radius: 16px;
  }
}

.container {
  margin-inline: auto;
  padding-block: 16px;
  max-width: 280px;
  width: 100%;
}
</style>
