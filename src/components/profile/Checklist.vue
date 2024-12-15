<template>
  <div :class="$style.container">
    <h2 class="title-md">
      {{ title }}
    </h2>
    <template v-if="items?.length">
      <ul :class="[$style.list, isOpened && $style.isOpened]">
        <li v-for="(item, index) in items" :key="index">
          <UiIcon :name="item.icon" />
          {{ item.title }}
        </li>
      </ul>
      <div :class="$style.footer">
        <UiButtonMore v-model="isOpened" :class="$style.more" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { ProfileChecklist } from '~/types/profile/checklist'

defineProps<ProfileChecklist>()

const isOpened = ref<boolean>(false)
</script>

<style lang="scss" module>
.container {
  display: grid;
  border-bottom: 1px solid var(--gray-200);

  @include helpers.media($to: sm) {
    gap: 20px;
    padding: 32px 24px;
  }

  @include helpers.media(sm) {
    gap: 24px;
    padding-bottom: 48px;
  }
}

.list {
  @include helpers.media($to: xs) {
    display: grid;
    gap: 16px;

    &:not(.isOpened) {
      li:nth-child(n + 6) {
        display: none;
      }
    }
  }

  @include helpers.media(xs) {
    column-count: 2;
    margin: -8px;
    max-width: 550px;
  }

  li {
    display: flex;
    gap: 16px;
    align-items: center;

    @include helpers.media(xs) {
      break-inside: avoid;
      padding: 8px;
    }
  }

  svg {
    flex: 0 0 auto;
    align-self: flex-start;
    width: 24px;
  }
}

.footer {
  @include helpers.media(xs) {
    display: none;
  }
}
</style>
