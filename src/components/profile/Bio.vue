<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <img v-if="avatar" alt="Avatar" :src="avatar" :class="$style.avatar" />
      <div :class="$style.details">
        <h2 v-if="name" class="title-lg">
          {{ name }}
        </h2>
        <div v-if="meta" :class="$style.meta">{{ meta }}</div>
        <div v-if="status" :class="$style.status">{{ status }}</div>
      </div>
      <div v-if="clientsRecommended" :class="$style.stats">
        <div :class="$style.box">
          <UiIcon name="diamond" />
          {{ clientsRecommended }}
        </div>
      </div>
    </div>
    <div v-if="description" :class="$style.content">
      <p :class="[$style.description, isOpened && $style.isOpened]">
        {{ description }}
      </p>
      <UiButtonMore v-model="isOpened" :class="$style.more" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProfileBio } from '~/types/profile/bio'

defineProps<ProfileBio>()

const isOpened = ref<boolean>(false)
</script>

<style lang="scss" module>
.container {
  display: grid;
  gap: 24px;

  @include helpers.media($to: sm) {
    padding: 32px 24px;
    background: var(--gray-50);
  }
}

.header {
  @include helpers.media($to: lg) {
    display: grid;
    column-gap: 16px;
    row-gap: 24px;
    grid-template-columns: auto 1fr;
  }

  @include helpers.media(lg) {
    display: flex;
    gap: 16px;
    align-items: center;
  }
}

.avatar {
  border-radius: 50%;
  width: 96px;
  height: 96px;
  object-fit: cover;
}

.details {
  display: grid;
  gap: 4px;
  flex: 1 1 auto;
}

.status {
  position: relative;
  padding-left: 22px;

  &:before {
    content: '';
    position: absolute;
    top: 4px;
    left: 0;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background: var(--vibrant-teal);
  }
}

.stats {
  flex: 0 0 auto;

  @include helpers.media($to: lg) {
    grid-column: 1 / 3;
  }
}

.box {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  padding: 2px 16px;
  border: 1px solid var(--gray-300);
  border-radius: 6px;
  max-width: 100%;
  height: 32px;
  color: var(--navy-blue);
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  svg {
    width: 22px;
    color: var(--stale-gray);
  }
}

.description {
  @include helpers.media($to: sm) {
    margin-bottom: 20px;

    &:not(.isOpened) {
      @supports (line-clamp: 4) {
        line-clamp: 4;
      }

      @supports not (line-clamp: 4) {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}

.more {
  @include helpers.media(sm) {
    --button-more-display: none;
  }
}
</style>
