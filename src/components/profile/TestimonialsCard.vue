<template>
  <div :class="$style.container">
    <div v-if="stars" :class="$style.stars">
      <UiIcon v-for="index in stars" :key="index" name="star" />
    </div>
    <p :class="$style.comment">
      {{ comment }}
    </p>
    <UiMiniProfile :avatar="avatar" :name="name" :meta="address" />
  </div>
</template>

<script lang="ts" setup>
import type { ProfileTestimonialsCard } from '~/types/profile/testimonials'

defineProps<ProfileTestimonialsCard>()
</script>

<style lang="scss" module>
.container {
  position: relative;
  padding: 32px;
  border-radius: 12px;
  background: var(--gray-50);
  --mini-profile-avatar: 48px;
  --mini-profile-gap: 12px;
}

.stars {
  display: flex;
  gap: 4px;
  margin-bottom: 16px;

  svg {
    color: var(--citrus-orange);
    width: 20px;
  }
}

.comment {
  margin-bottom: 16px;

  @include helpers.media(sm) {
    margin-bottom: 32px;
  }
}
</style>
