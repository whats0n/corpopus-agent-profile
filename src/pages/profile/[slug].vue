<template>
  <div v-if="data" :class="$style.container">
    <ProfileGallery v-if="data.gallery" :images="data.gallery" />
    <div :class="['container', $style.main]">
      <div :class="$style.content">
        <ProfileBio v-if="data.bio" v-bind="data.bio" :class="$style.left" />
        <ProfileSpecialization
          v-if="data.specialization"
          v-bind="data.specialization"
          :class="$style.left"
        />
        <ProfileExpertise
          v-if="data.expertise"
          v-bind="data.expertise"
          :class="$style.left"
        />
        <ProfileChecklist
          v-if="data.checklist"
          v-bind="data.checklist"
          :class="$style.left"
        />
        <ProfileCostRange
          v-if="data.costRange"
          v-bind="data.costRange"
          :class="$style.right"
        />
        <ProfileTestimonials
          v-if="data.testimonials"
          v-bind="data.testimonials"
          :class="$style.wide"
        />
        <ProfileServiceArea
          v-if="data.serviceArea"
          v-bind="data.serviceArea"
          :class="$style.wide"
        />
        <ProfileContacts
          v-if="data.contacts"
          v-bind="data.contacts"
          :class="$style.wide"
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

.left {
  @include helpers.media(md) {
    grid-column: 1;
  }
}

.wide {
  @include helpers.media(md) {
    grid-column: 1 / 3;
  }
}
</style>
