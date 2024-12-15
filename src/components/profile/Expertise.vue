<template>
  <div :class="$style.container">
    <h2 class="title-md">
      {{ title }}
    </h2>
    <ul v-if="content?.length" :class="$style.content">
      <li v-for="(item, index) in content" :key="index">
        <div :class="$style.value">
          <div :class="$style.icon">
            <UiIcon name="zap-fast" />
          </div>
          {{ item.percent }}%
        </div>
        <h4 :class="$style.subtitle">
          {{ item.title }}
        </h4>
        <p>
          {{ item.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { ProfileExpertise } from '~/types/profile/expertise'

defineProps<ProfileExpertise>()
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

.content {
  display: grid;
  gap: 32px;

  @include helpers.media(sm) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.value {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12px;
  color: var(--vibrant-teal);
  font-size: 30px;
  font-weight: 600;
  line-height: 38px;

  @include helpers.media(sm) {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
  }
}

.icon {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  color: var(--vibrant-teal);
  background: var(--success-100);

  svg {
    width: 50%;
  }
}

.subtitle {
  margin-bottom: 8px;
  color: var(--gray-900);
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  @include helpers.media(sm) {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
