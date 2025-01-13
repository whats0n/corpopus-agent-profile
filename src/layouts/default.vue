<template>
  <div :class="$style.container">
    <header :class="$style.header" :style="$route.meta.header?.style">
      <div :class="[$style.headerIn, 'container']">
        <img :src="logo" alt="TrustedFew" :class="$style.logo" />

        <div v-if="$route.meta.header?.buttons" :class="$style.buttons">
          <UiButton to="#" text="Log in" />
          <UiButton ui="primary" to="#" text="Sign in" />
        </div>
      </div>
    </header>
    <slot />
    <footer :class="$style.footer">
      <div :class="['container', $style.footerIn]">
        © 2025 Trusted Few. All Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const logo = computed<string>(() =>
  route.meta.header?.theme === 'light'
    ? '/images/logo-white.svg'
    : '/images/logo.svg',
)
</script>

<style lang="scss" module>
.container {
  --header-height: 72px;

  @include helpers.media(sm) {
    --header-height: 80px;
  }
}

.header {
  z-index: 10;
  padding-inline: 20px;
}

.headerIn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--header-height);
}

.logo {
  height: 20px;

  @include helpers.media(sm) {
    height: 27px;
  }
}

.buttons {
  position: absolute;
  inset-block: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  --button-size: 44px;

  @include helpers.media($to: sm) {
    display: none;
  }
}

.footer {
  color: #fff;
  background: var(--navy-blue);

  @include helpers.media($to: sm) {
    text-align: center;
  }
}

.footerIn {
  padding: 24px 16px;

  @include helpers.media(sm) {
    padding: 28px 32px;
  }
}
</style>
