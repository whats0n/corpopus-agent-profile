<template>
  <div :class="$style.tabs">
    <div :class="$style.controls">
      <button
        v-for="item in items"
        :key="item.id"
        type="button"
        :class="[$style.control, selected === item.id && $style.isSelected]"
        @click="selected = item.id"
      >
        {{ item.title }}
      </button>
    </div>
    <ul :class="$style.content">
      <li v-for="item in selectedContent" :key="`${item.id}:${item.value}`">
        <div :class="$style.subtitle">
          {{ item.label }}
        </div>
        <div :class="$style.value">
          {{ item.value }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { SampleTab, SampleTabContent } from '~/types/sample'

const props = defineProps<{
  items: SampleTab[]
}>()

const selected = ref<number>(props.items[0]?.id)

const selectedContent = computed<SampleTabContent[]>(
  () => props.items.find((item) => item.id === selected.value)?.content || [],
)
</script>

<style lang="scss" module>
.tabs {
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
}

.controls {
  display: grid;
  gap: 4px;
  grid-template-columns: 1fr 1fr;
  margin: -1px -1px 0;
  padding: 3px;
  border: 1px solid var(--gray-200);
  border-radius: 10px;
  background-color: var(--gray-50);
}

.control {
  padding: 8px 12px;
  border-radius: 6px;
  color: var(--gray-500);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;

  @include helpers.hover {
    color: var(--gray-700);
    text-decoration: underline;
  }

  &.isSelected {
    color: var(--gray-700);
    background: #ffffff;
    box-shadow: 0px 1px 3px rgba(10, 13, 18, 0.1),
      0px 1px 2px -1px rgba(10, 13, 18, 0.1);
  }
}

.content {
  li {
    display: grid;
    grid-template-columns: 1fr 1fr;

    &:not(:first-child) {
      border-top: 1px solid var(--gray-200);
    }

    > * {
      padding: 13px 23px 14px;

      @include helpers.media(sm) {
        padding: 17px 23px 18px;
      }
    }
  }
}

.subtitle {
  color: var(--gray-900);
}

.value {
  color: var(--gray-600);
}
</style>
