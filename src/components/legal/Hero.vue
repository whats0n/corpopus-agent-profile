<template>
  <div :class="$style.container">
    <div :class="$style.label">Current as of 20 Jan 2025</div>
    <h1 :class="$style.title">Privacy Policy</h1>
    <p :class="$style.description">
      Your privacy is important to us at Untitled. We respect your privacy
      regarding any information we may collect from you across our website.
    </p>
  </div>
</template>

<style lang="scss" module>
.container {
  margin: 0 auto;
  padding: 64px 24px;
  max-width: 818px;
  text-align: center;

  @include helpers.media(sm) {
    padding-block: 96px;
  }
}

.label {
  margin-bottom: 12px;
  color: var(--vibrant-teal);
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  @include helpers.media(sm) {
    font-size: 16px;
    line-height: 24px;
  }
}

.title {
  margin-bottom: 16px;
  color: var(--navy-blue);
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;

  @include helpers.media(sm) {
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 60px;
  }
}

.description {
  color: var(--gray-600);
  font-size: 18px;
  line-height: 28px;
}
</style>
