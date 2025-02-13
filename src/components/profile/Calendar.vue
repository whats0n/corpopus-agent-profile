<template>
  <div ref="containerRef" :class="$style.container">
    <h2 :class="['title-lg', $style.title]">Get your instant quote</h2>
    <p :class="$style.description">
      Receive accurate pricing for your unique home in less than 3 minutes.
    </p>
    <div :class="$style.datepicker">
      <UiDateTimePicker v-model="date" no-weekends :min-date="new Date()">
        <template #header>
          <div :class="$style.header">
            <h3 :class="$style.subtitle">Pick a preferred date</h3>
            <p>
              Receive accurate pricing for your unique home in less than 3
              minutes.
            </p>
          </div>
        </template>
        <template #footer>
          <div :class="$style.footer">
            <UiButton
              ui="primary"
              text="Get your custom quote"
              @click="openQuote"
            />
          </div>
        </template>
      </UiDateTimePicker>
    </div>
  </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig()

const date = ref<Date | null>(null)

const openQuote = (): void => {
  if (!isInView.value) {
    containerRef.value?.scrollIntoView({ block: 'start', behavior: 'smooth' })

    return
  }

  if (!date.value) return

  const url = new URL(appConfig.quoteUrl)

  url.searchParams.set(
    'date',
    [
      date.value.getDate(),
      date.value.getMonth(),
      date.value.getFullYear(),
    ].join('-'),
  )

  window.open(url, '_blank')
}

const containerRef = ref<HTMLElement | null>(null)

const isInView = ref<boolean>(false)

let observer: IntersectionObserver | null = null

onMounted(async () => {
  await nextTick()

  if (!containerRef.value) return

  observer = new IntersectionObserver((entries) => {
    isInView.value = entries.some((entry) => entry.intersectionRatio > 0)
  })

  observer.observe(containerRef.value)
})

onBeforeMount(() => {
  if (observer) observer.disconnect()

  observer = null
})
</script>

<style lang="scss" module>
.container {
  @include helpers.media(sm) {
    text-align: center;
  }

  @include helpers.media($to: sm) {
    padding: 32px 24px;
    border-bottom: 1px solid var(--gray-200);
    --datepicker-padding: 0;
  }
}

.title {
  margin-bottom: 10px;

  @include helpers.media($to: sm) {
    display: none;
  }
}

.description {
  margin-bottom: 24px;

  @include helpers.media($to: sm) {
    display: none;
  }
}

.header {
  p {
    @include helpers.media(sm) {
      display: none;
    }
  }
}

.subtitle {
  color: var(--navy-blue);

  @include helpers.media($to: sm) {
    margin-bottom: 8px;
  }
}

.footer {
  @include helpers.media($to: sm) {
    position: fixed;
    z-index: 900;
    inset-inline: 0;
    bottom: 0;
    padding: 16px;
    background: #fff;
    box-shadow: 0px 24px 48px 12px rgba(10, 13, 18, 0.18),
      0px 4px 4px 2px rgba(10, 13, 18, 0.04);
  }

  button {
    width: 100%;
  }
}

body {
  @include helpers.media($to: sm) {
    padding-bottom: 80px;
  }
}
</style>
