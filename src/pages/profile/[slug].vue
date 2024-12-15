<template>
  <div v-if="data" :class="$style.container">
    <ProfileGallery v-if="data.gallery" :images="data.gallery" />
    <div :class="['container', $style.main]">
      <div :class="$style.content">
        <ProfileCalendar :class="[$style.right, $style.calendar]" />
        <ProfileCostRange
          v-if="data.costRange"
          v-bind="data.costRange"
          :class="[$style.right, $style.costRange]"
        />
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
        <ProfileTestimonials
          v-if="data.testimonials"
          v-bind="data.testimonials"
          :class="[$style.wide, $style.testimonials]"
        />
        <ProfileServiceArea
          v-if="data.serviceArea"
          v-bind="data.serviceArea"
          :class="[$style.wide, $style.serviceArea]"
        />
        <ProfileContacts
          v-if="data.contacts"
          v-bind="data.contacts"
          :class="[$style.wide, $style.contacts]"
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
  @include helpers.media(sm, md) {
    gap: 48px;
  }

  @include helpers.media($to: md) {
    display: grid;
  }
}

.left,
.wide {
  &:not(:last-child) {
    @include helpers.media(md) {
      margin-bottom: 48px;
    }
  }
}

.wide {
  @include helpers.media(md) {
    clear: both;
  }
}

.right {
  @include helpers.media(md) {
    float: right;
    clear: right;
    width: 400px;
    margin-left: 48px;
    margin-bottom: 48px;
  }

  @include helpers.media(lg) {
    margin-left: 112px;
  }
}

.costRange {
  @include helpers.media($to: md) {
    order: 1;
  }
}

.serviceArea {
  @include helpers.media($to: md) {
    order: 2;
  }
}

.calendar {
  @include helpers.media($to: md) {
    order: 3;
  }
}

.testimonials {
  @include helpers.media($to: md) {
    order: 4;
  }
}

.contacts {
  @include helpers.media($to: md) {
    order: 5;
  }
}
</style>
