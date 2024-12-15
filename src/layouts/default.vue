<template>
  <div :class="$style.container">
    <header :class="$style.header">
      <img src="/images/logo.svg" :class="$style.logo" />
    </header>
    <slot />
    <footer :class="$style.footer">
      <div :class="['container', $style.footerIn]">
        © 2025 Trusted Few. All Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<style lang="scss" module>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;

  @include helpers.media(sm) {
    height: 80px;
  }
}

.logo {
  height: 20px;

  @include helpers.media(sm) {
    height: 27px;
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
