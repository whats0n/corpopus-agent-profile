<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <h2 :class="['title-lg', $style.title]">
        {{ title }}
      </h2>
      <p :class="$style.meta">
        {{ meta }}
      </p>
      <UiMiniProfile
        :avatar="avatar"
        :name="name"
        :meta="position"
        :class="$style.profile"
      />
      <p :class="$style.description">
        {{ description }}
      </p>
    </div>
    <ProfileContactsCard
      icon="message-chat"
      :title="chat?.title"
      :text="chat?.text"
      :link="chat?.link"
    />
    <ProfileContactsCard
      icon="phone"
      :title="call?.title"
      :text="call?.text"
      :link="call?.link"
    />
  </div>
</template>

<script lang="ts" setup>
import type { ProfileContacts } from '~/types/profile/contacts'

defineProps<ProfileContacts>()
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
  margin-bottom: 20px;

  @include helpers.media(sm) {
    margin-bottom: 16px;
  }
}

.profile {
  margin-bottom: 20px;
  --mini-profile-avatar: 56px;
  --mini-profile-gap: 16px;
  --mini-profile-name-font-size: 16px;
  --mini-profile-name-line-height: 1.5;

  @include helpers.media(sm) {
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
