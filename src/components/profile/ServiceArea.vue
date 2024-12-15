<template>
  <div :class="$style.container">
    <h2 :class="['title-lg', $style.title]">
      {{ title }}
    </h2>
    <p :class="$style.description">
      {{ description }}
    </p>
    <ClientOnly>
      <UiMap v-if="center?.length" :center="center" :zoom="zoom" />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import type { ProfileServiceArea } from '~/types/profile/serviceArea'

defineProps<ProfileServiceArea>()
</script>

<style lang="scss" module>
.container {
  border-bottom: 1px solid var(--gray-200);

  @include helpers.media($to: sm) {
    padding: 32px 24px;
    --map-height: 260px;
  }

  @include helpers.media(sm) {
    padding-bottom: 60px;
  }
}

.title {
  margin-bottom: 8px;

  @include helpers.media(sm) {
    margin-bottom: 12px;
  }
}

.description {
  margin-bottom: 20px;

  @include helpers.media(sm) {
    margin-bottom: 36px;
  }
}
</style>
