<template>
  <div :class="$style.container">
    <PricingHero />
    <SharedFeatures />
    <div class="container">
      <div :class="$style.serviceArea">
        <SharedServiceArea />
      </div>
      <PricingSample />
      <div :class="$style.contacts">
        <SharedContacts
          title="Transforming lives, one clean at a time"
          description="A clean home brings peace of mind, and that's at the heart of everything we do. We know that for every person overwhelmed by dust, messy kitchens, or floors that need shining, there’s a Trusted Few cleaner ready, willing, and able to step in—without delay."
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  header: {
    buttons: true,
    theme: 'light',
    style: {
      position: 'absolute',
      top: 0,
      'inset-inline': 0,
    },
  },
})
</script>

<style lang="scss" module>
.container {
  position: relative;

  > div:first-child {
    padding-top: var(--header-height);
  }
}

.serviceArea {
  @include helpers.media(sm) {
    padding: 60px 32px 0;
  }
}

.contacts {
  @include helpers.media(sm) {
    padding: 48px 32px 0;
  }
}
</style>
