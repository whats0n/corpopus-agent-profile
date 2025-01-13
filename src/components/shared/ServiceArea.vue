<template>
  <div :class="$style.container">
    <h2 :class="['title-lg', $style.title]">Service area</h2>
    <p :class="$style.description">
      Seattle, Bellevue, Edmonds, Redmond, Woodinville, Snoqualmie, Issaquah,
      Mercer Island, Renton and a few more.
    </p>
    <ClientOnly>
      <UiMap :center="[47.6062, -122.3321]" :zoom="10" />
    </ClientOnly>
  </div>
</template>

<style lang="scss" module>
.container {
  border-bottom: 1px solid var(--gray-200);

  @include helpers.media($to: sm) {
    padding: 32px 24px;
    --map-height: 260px;
  }

  @include helpers.media(sm) {
    padding-bottom: 60px;
  }
}

.title {
  margin-bottom: 8px;

  @include helpers.media(sm) {
    margin-bottom: 12px;
  }
}

.description {
  margin-bottom: 20px;

  @include helpers.media(sm) {
    margin-bottom: 36px;
  }
}
</style>
