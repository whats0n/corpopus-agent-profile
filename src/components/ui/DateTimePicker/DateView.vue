<template>
  <div :class="$style.calendar">
    <div :class="$style.header">
      <button type="button" :class="$style.nav" @click="$emit('prev')">
        <UiIcon name="chevron-left" />
      </button>
      <div :class="$style.date">
        <button type="button" :class="$style.details" @click="$emit('month')">
          {{ currentMonth }}
        </button>
        <button type="button" :class="$style.details" @click="$emit('year')">
          {{ currentYear }}
        </button>
      </div>
      <button type="button" :class="$style.nav" @click="$emit('next')">
        <UiIcon name="chevron-right" />
      </button>
    </div>
    <div :class="$style.weekdays">
      <div v-for="(day, i) in weekdays" :key="i" :class="$style.weekday">
        {{ day }}
      </div>
    </div>
    <div :class="$style.days">
      <button
        v-for="day in days"
        :key="day.date?.toISOString()"
        type="button"
        :class="[
          $style.day,
          {
            [$style.today]: day.isToday,
            [$style.selected]: day.isSelectedDate,
          },
        ]"
        :disabled="day.isDisabled"
        @click="$emit('select', day.date)"
      >
        {{ day.date.getDate() }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DateTimePickerDay } from '~/composables/useDateTimePicker/types'

defineEmits<{
  (e: 'select', date: Date | null): void
  (e: 'next' | 'prev' | 'month' | 'year'): void
}>()

defineProps<{
  currentMonth: string
  currentYear: number
  weekdays: string[]
  days: DateTimePickerDay[]
}>()
</script>

<style lang="scss" module>
.calendar {
  display: grid;
  gap: 4px;
  font-size: 14px;
}

// BODY
.weekdays,
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.days {
  row-gap: 4px;
}

.weekday {
  color: var(--text-dark-color);
  font-weight: 700;
  text-align: center;
}

.day {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  border-radius: 50%;
  color: inherit;
  line-height: normal;
  text-align: center;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;

  &:not(.selected):enabled {
    @include helpers.hover {
      color: var(--vibrant-teal);
      text-decoration: underline;
    }
  }

  &:disabled {
    color: var(--gray-500);
    cursor: not-allowed;
  }
}

.today {
  background-color: var(--gray-100);
}

.selected {
  color: #fff;
  background-color: var(--vibrant-teal);
}

// HEADER
.header {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  gap: 4px;
  margin-bottom: 18px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  line-height: normal;
  text-align: center;
  transition: color 0.2s, background-color 0.2s;

  @include helpers.hover {
    color: #fff;
    background: var(--vibrant-teal);
  }

  svg {
    width: 20px;
  }
}

.details {
  display: inline-block;
  vertical-align: top;
  padding-inline: 0.25ch;
  overflow: hidden;
  color: var(--navy-blue);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.2s;

  @include helpers.hover {
    color: var(--vibrant-teal);
    text-decoration: underline;
  }
}

.date {
  text-align: center;
}
</style>
