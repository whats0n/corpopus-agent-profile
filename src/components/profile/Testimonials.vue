<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <UiIcon name="star" />
      <h2 class="title-lg">
        {{ title }}
      </h2>
    </div>

    <ul v-if="metrics?.length" :class="$style.metrics">
      <li v-for="(item, index) in metrics" :key="index">
        <span>{{ item.name }}</span>
        <strong>{{ item.value }}</strong>
      </li>
    </ul>

    <template v-if="cards?.length">
      <div :class="[$style.cards, isOpened && $style.isOpened]">
        <ProfileTestimonialsCard
          v-for="(card, index) in cards"
          v-bind="card"
          :key="index"
          :class="$style.card"
        />
      </div>

      <div :class="$style.footer">
        <UiButton
          :text="isOpened ? 'Show less reviews' : 'Show more reviews'"
          @click="isOpened = !isOpened"
        />
      </div>

      <swiper-container ref="containerRef" :class="$style.slider">
        <swiper-slide v-for="(card, index) in cards" :key="index">
          <ProfileTestimonialsCard v-bind="card" />
        </swiper-slide>
      </swiper-container>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { ProfileTestimonials } from '~/types/profile/testimonials'

defineProps<ProfileTestimonials>()

const isOpened = ref<boolean>(false)

const containerRef = ref(null)

useSwiper(containerRef, {
  loop: false,
  slidesPerView: 1.315,
  spaceBetween: 20,
  slidesOffsetAfter: 24,
  slidesOffsetBefore: 24,
})
</script>

<style lang="scss" module>
.container {
  display: grid;
  border-bottom: 1px solid var(--gray-200);
  --padding-inline: 0;

  @include helpers.media($to: sm) {
    gap: 20px;
    padding-block: 32px;
    --padding-inline: 24px;
  }

  @include helpers.media(sm) {
    gap: 36px;
    padding-bottom: 48px;
  }
}

.header {
  display: flex;
  align-items: center;
  padding-inline: var(--padding-inline);

  svg {
    flex: 0 0 auto;
    align-self: flex-start;
    margin: 3px 6px 3px 0;
    width: 22px;
    color: var(--citrus-orange);

    @include helpers.media(sm) {
      width: 32px;
    }
  }

  h2 {
    flex: 1 1 auto;

    @include helpers.media($to: sm) {
      font-size: 18px;
      line-height: 28px;
    }
  }
}

.metrics {
  @include helpers.media(sm) {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  @include helpers.media($to: sm) {
    display: flex;
    overflow: auto;
    padding-inline: var(--padding-inline);
  }

  li {
    display: grid;
    gap: 8px;
    padding: 0 16px;
    border-left: 1px solid #e9eaeb;

    @include helpers.media($to: sm) {
      flex: 0 0 auto;
      width: 120px;
      font-size: 12px;
      line-height: 18px;
    }

    @include helpers.media(sm) {
      width: 180px;
      gap: 20px;
      padding: 20px;
    }
  }

  strong {
    color: var(--navy-blue);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;

    @include helpers.media(sm) {
      font-size: 20px;
      line-height: 30px;
    }
  }
}

.cards {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);

  &:not(.isOpened) {
    .card:nth-child(n + 7) {
      display: none;
    }
  }
}

.cards,
.footer {
  @include helpers.media($to: md) {
    display: none;
  }
}

.slider {
  min-width: 0;

  @include helpers.media($to: sm) {
    width: 100%;
  }

  @include helpers.media(sm, md) {
    margin-inline: -32px;
  }

  @include helpers.media(md) {
    display: none;
  }
}
</style>
