<template>
  <div v-if="data" :class="$style.container">
    <ProfileGallery v-if="data.gallery" :images="data.gallery" />
    <div :class="['container', $style.main]">
      <div :class="$style.content">
        <ProfileBio v-if="data.bio" v-bind="data.bio" :class="$style.bio" />
        <ProfileSpecialization
          v-if="data.specialization"
          v-bind="data.specialization"
          :class="$style.specialization"
        />
        <ProfileExpertise
          v-if="data.expertise"
          v-bind="data.expertise"
          :class="$style.expertise"
        />
        <ProfileChecklist
          v-if="data.checklist"
          v-bind="data.checklist"
          :class="$style.checklist"
        />
        <ProfileCostRange
          v-if="data.costRange"
          v-bind="data.costRange"
          :class="$style.costRange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProfileContent } from '~/types/profile'

const route = useRoute()

const { data } = await useLazyAsyncData<ProfileContent>(
  `profile-${route.params.slug}`,
  () => $fetch(`/api/profile/${route.params.slug}`),
)
</script>

<style lang="scss" module>
.main {
  @include helpers.media(sm) {
    padding-top: 60px;
  }

  @include helpers.media(sm) {
    padding-inline: 32px;
  }
}

.content {
  display: grid;

  @include helpers.media(sm) {
    gap: 48px;
  }

  @include helpers.media(md) {
    grid-auto-flow: column dense;
    grid-template-columns: 1fr 400px;
  }

  @include helpers.media(lg) {
    column-gap: 112px;
  }
}

.bio,
.specialization,
.expertise,
.checklist {
  @include helpers.media(md) {
    grid-column: 1;
  }
}

.costRange {
  align-self: flex-start;
}
</style>
