<template>
  <div :class="$style.container">
    <header :class="$style.header">
      <img src="/images/logo.svg" :class="$style.logo" />
    </header>
    <slot />
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
</style>
