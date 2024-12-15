<template>
  <button type="button" :class="$style.button" @click="value = !value">
    {{ value ? 'Show less' : 'Show more' }}
  </button>
</template>

<script lang="ts" setup>
const value = defineModel<boolean>({ required: true })
</script>

<style lang="scss" module>
.button {
  display: var(--button-more-display, inline-block);
  vertical-align: top;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-decoration: underline;

  @include helpers.hover {
    text-decoration: none;
  }
}
</style>
