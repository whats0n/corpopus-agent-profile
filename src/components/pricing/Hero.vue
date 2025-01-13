<template>
  <div :class="$style.container">
    <div :class="$style.inner">
      <h1 :class="$style.title">
        Curating the finest in home cleaning professionals
      </h1>
      <p :class="$style.description">
        We handpick the most trusted professionals to ensure your home shines,
        leaving you with peace of mind.
      </p>
      <UiButton
        ui="primary"
        text="Get your custom quote"
        :to="appConfig.url.quoteTrustedfew"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig()
</script>

<style lang="scss" module>
.container {
  color: #fff;
  background: url('/images/pricing-hero.jpg') center 10% no-repeat;
  background-size: cover;
  text-align: center;
}

.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 32px 74px;

  @include helpers.media(sm) {
    padding-block: 140px 213px;
    --button-size: 60px;
  }
}

.title {
  margin-bottom: 12px;
  max-width: 330px;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @include helpers.media(sm) {
    margin-bottom: 24px;
    max-width: 700px;
    font-size: 48px;
    line-height: 60px;
    letter-spacing: -0.02em;
  }
}

.description {
  margin-bottom: 16px;
  max-width: 330px;
  color: var(--gray-200);
  font-size: 14px;
  line-height: 20px;

  @include helpers.media(sm) {
    margin-bottom: 48px;
    max-width: 600px;
    font-size: 20px;
    line-height: 30px;
  }
}
</style>
