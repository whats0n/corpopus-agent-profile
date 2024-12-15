<template>
  <div :class="$style.container">
    <UiIcon :name="icon" :class="$style.icon" />
    <h4 v-if="title" :class="$style.title">
      {{ title }}
    </h4>
    <p v-if="text" :class="$style.text">
      {{ text }}
    </p>
    <a v-if="link" :href="link.href" :class="$style.link">
      {{ link.text }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import type { ProfileContactsCard } from '~/types/profile/contacts'

defineProps<Partial<ProfileContactsCard> & { icon: string }>()
</script>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  padding: 24px;
  color: var(--stale-gray);
  background: var(--gray-50);
  font-size: 14px;
  line-height: 20px;

  @include helpers.media(sm) {
    font-size: 16px;
    line-height: 1.5;
  }
}

.icon {
  margin-bottom: 12px;
  width: 24px;
  color: var(--vibrant-teal);

  @include helpers.media(sm) {
    margin-bottom: 48px;
  }
}

.title {
  margin-bottom: 8px;
  color: var(--navy-blue);
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;

  @include helpers.media(sm) {
    font-size: 20px;
    line-height: 1.5;
  }
}

.text {
  margin-bottom: 20px;
}

.link {
  color: var(--vibrant-teal);
  font-weight: 600;

  @include helpers.hover {
    text-decoration: underline;
  }
}
</style>
