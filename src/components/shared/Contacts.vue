<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <h2 :class="['title-lg', $style.title]">
        {{ title }}
      </h2>
      <p :class="$style.meta">
        {{ description }}
      </p>
      <template v-if="supportProfile">
        <UiMiniProfile
          :avatar="supportProfile.avatar"
          :name="supportProfile.name"
          :meta="supportProfile.position"
          :class="$style.profile"
        />
        <p :class="$style.description">
          {{ supportProfile.description }}
        </p>
      </template>
    </div>
    <SharedContactsCard v-for="item in cards" :key="item.icon" v-bind="item" />
  </div>
</template>

<script lang="ts" setup>
import type { SupportProfile } from '~/types/supportProfile'

defineProps<{
  title?: string
  description?: string
  supportProfile?: SupportProfile
}>()

const cards = [
  {
    icon: 'message-chat',
    title: 'Chat',
    text: 'We’re here to help.',
    link: {
      href: '/',
      text: 'Start live chat',
    },
  },
  {
    icon: 'phone',
    title: 'Call',
    text: 'Mon-Fri / 8am to 5pm.',
    link: {
      href: 'tel:+14258005551',
      text: '+1 (425) 800-5551',
    },
  },
]
</script>

<style lang="scss" module>
.container {
  display: grid;
  gap: 32px;

  @include helpers.media($to: sm) {
    padding: 32px 24px;
    gap: 12px;
  }

  @include helpers.media(xs, md) {
    grid-template-columns: 1fr 1fr;
  }

  @include helpers.media(sm) {
    padding-block: 12px 60px;
  }

  @include helpers.media(md) {
    grid-template-columns: 1fr 240px 240px;
  }
}

.content {
  @include helpers.media($to: sm) {
    padding-bottom: 8px;
  }

  @include helpers.media(xs, md) {
    grid-column: 1 / 3;
  }
}

.title {
  margin-bottom: 8px;

  @include helpers.media(sm) {
    margin-bottom: 12px;
  }

  @include helpers.media($to: sm) {
    font-size: 18px;
    line-height: 28px;
  }
}

.meta {
  font-size: 14px;
  line-height: 20px;

  @include helpers.media(sm) {
    font-size: 18px;
    line-height: 28px;
  }
}

.profile {
  margin-top: 20px;
  margin-bottom: 20px;
  --mini-profile-avatar: 56px;
  --mini-profile-gap: 16px;
  --mini-profile-name-font-size: 16px;
  --mini-profile-name-line-height: 1.5;

  @include helpers.media(sm) {
    margin-top: 16px;
    margin-bottom: 16px;
    --mini-profile-avatar: 72px;
    --mini-profile-name-font-size: 18px;
    --mini-profile-name-line-height: 28px;
  }
}

.description {
  font-size: 14px;
  line-height: 20px;
}
</style>
