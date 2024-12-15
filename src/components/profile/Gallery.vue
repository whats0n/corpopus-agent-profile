<template>
  <div :class="['container', $style.container]">
    <!-- desktop -->
    <div :class="$style.grid">
      <div v-for="(image, index) in images.slice(0, 5)" :key="index">
        <img :src="image.src" :alt="image.alt" />
      </div>
      <button type="button" :class="$style.button" @click="isOpened = true">
        <UiIcon name="dots-grid" />
        Show all photos
      </button>
    </div>
    <ClientOnly>
      <UiGalleryModal v-model="isOpened" :images="images" />
    </ClientOnly>

    <!-- mobile -->
    <div :class="$style.gallery">
      <ClientOnly>
        <swiper-container ref="containerRef" :class="$style.slider">
          <swiper-slide
            v-for="(image, index) in images"
            :key="index"
            :class="$style.slide"
          >
            <img :src="image.src" :alt="image.alt" />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProfileGallery } from '~/types/profile/gallery'

defineProps<{ images: ProfileGallery[] }>()

const isOpened = ref<boolean>(false)

const containerRef = ref(null)

useSwiper(containerRef, {
  loop: false,
  pagination: {
    type: 'fraction',
    renderFraction(currentClass, totalClass) {
      return `<div style="padding: 0 16px 16px; text-align: right;">
        <div style="
          display: inline-block;
          padding: 4px 12px;
          border-radius: 8px;
          color: #ffffff;
          background: rgba(14, 58, 83, 0.75);
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
            inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18),
            inset 0px -2px 0px rgba(10, 13, 18, 0.05);
          font-weight: 600;
          font-size: 12px;
          line-height: 18px;
        ">
          <span class="${currentClass}"></span>/<span class="${totalClass}"></span>
        </div>
      </div>`
    },
  },
})
</script>

<style lang="scss" module>
.container {
  @include helpers.media(sm) {
    padding-inline: 32px;
  }
}

.grid {
  position: relative;
  display: grid;
  gap: 12px;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  border-radius: 16px;
  overflow: hidden;

  @include helpers.media($to: sm) {
    display: none;
  }

  > div:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.button {
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  height: 40px;
  color: var(--gray-700);
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
    inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18),
    inset 0px -2px 0px rgba(10, 13, 18, 0.05);
  font-weight: 600;
  font-size: 14px;
  line-height: normal;
  transition: color 0.2s, background-color 0.2s;

  @include helpers.hover {
    color: #fff;
    background: var(--gray-700);
  }

  svg {
    width: 20px;
  }
}

.gallery {
  aspect-ratio: 375 / 260;
  --swiper-pagination-bottom: 0;

  @include helpers.media(sm) {
    display: none;
  }
}

.slider,
.slide {
  height: 100%;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
