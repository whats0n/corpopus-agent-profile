<template>
  <div :class="$style.container">
    <img
      v-if="avatar?.length"
      :src="avatar"
      :class="$style.avatar"
      :alt="`Photo - ${name}`"
    />
    <div :class="$style.content">
      <strong v-if="name?.length" :class="$style.name">{{ name }}</strong>
      <span v-if="meta?.length" :class="$style.meta">{{ meta }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  avatar?: string
  name?: string
  meta?: string
}>()
</script>

<style lang="scss" module>
.container {
  display: grid;
  gap: var(--mini-profile-gap, 16px);
  align-items: center;
  grid-template-columns: auto 1fr;
}

.avatar {
  align-self: flex-start;
  border-radius: 50%;
  width: var(--mini-profile-avatar, 72px);
  height: var(--mini-profile-avatar, 72px);
}

.content {
  display: grid;
}

.name {
  color: var(--navy-blue);
  font-weight: 600;
  font-size: var(--mini-profile-name-font-size, inherit);
  line-height: var(--mini-profile-name-line-height, inherit);
}

.meta {
  color: var(--stale-gray);
}
</style>
