<template>
  <div :class="$style.container">
    <LegalHero />
    <LegalContent />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  header: {
    buttons: true,
  },
})
</script>

<style lang="scss" module>
.container {
  position: relative;
}
</style>
