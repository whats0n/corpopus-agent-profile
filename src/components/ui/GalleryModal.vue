<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-show="isOpened" :class="$style.container">
        <button type="button" :class="$style.close" @click="isOpened = false">
          <UiIcon name="close" />
        </button>
        <swiper-container ref="containerRef" :class="$style.slider">
          <swiper-slide
            v-for="(image, index) in images"
            :key="index"
            :class="$style.slide"
          >
            <img :src="image.src" :alt="image.alt" />
          </swiper-slide>
        </swiper-container>
        <button
          type="button"
          :class="[$style.control, $style.prev]"
          :disabled="!allow.prev"
          @click="swiper.prev()"
        >
          <UiIcon name="chevron-left" />
        </button>
        <button
          type="button"
          :class="[$style.control, $style.next]"
          :disabled="!allow.next"
          @click="swiper.next()"
        >
          <UiIcon name="chevron-right" />
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
const props = defineProps<{ images: { src: string; alt?: string }[] }>()

const isOpened = defineModel<boolean>({ required: true })

useLockBody(isOpened)

const allow = reactive<{
  prev: boolean
  next: boolean
}>({
  prev: false,
  next: true,
})

const containerRef = ref(null)

const swiper = useSwiper(containerRef, { loop: false })

onMounted(() => {
  swiper.instance.value?.on('slideChange', (swiper) => {
    allow.prev = swiper.activeIndex > 0
    allow.next = swiper.activeIndex < props.images.length - 1
  })
})
</script>

<style lang="scss" module>
.container {
  position: fixed;
  z-index: 1000;
  inset: 0;
  padding-block: var(--close-size);
  padding-inline: var(--control-size);
  background: rgba(0 0 0 / 0.9);
  --control-size: 40px;
  --close-size: 50px;

  @include helpers.media(sm) {
    --control-size: 90px;
  }
}

.close {
  position: absolute;
  z-index: 20;
  top: 0;
  right: 0;
  width: var(--close-size);
  height: var(--close-size);
  color: #fff;
  background: none;

  svg {
    width: 24px;
  }
}

.control {
  position: absolute;
  z-index: 10;
  inset-block: 0;
  width: var(--control-size);
  color: #fff;
  background: none;

  &:disabled {
    cursor: not-allowed;
    color: var(--gray-500);
  }

  svg {
    width: 24px;
  }
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

.slider {
  height: 100%;
}

.slide {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
