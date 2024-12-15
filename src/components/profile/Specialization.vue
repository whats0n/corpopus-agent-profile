<template>
  <div :class="$style.container">
    <h2 class="title-md">
      {{ title }}
    </h2>
    <ul :class="$style.tags">
      <li v-for="(tag, index) in tags" :key="index">
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { ProfileSpecialization } from '~/types/profile/specialization'

defineProps<ProfileSpecialization>()
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
    gap: 16px;
    padding-bottom: 48px;
  }
}

.tags {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;

  li {
    padding: 8px 16px;
    max-width: 100%;
    color: var(--navy-blue);
    background: var(--gray-50);
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;

    @include helpers.media(sm) {
      font-size: 14px;
    }
  }
}
</style>
