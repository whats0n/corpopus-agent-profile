<template>
  <button
    type="button"
    :class="[$style.button, $style[`ui-${ui}`]]"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    ui?: 'primary' | 'default'
    text: string
  }>(),
  {
    ui: 'default',
  },
)

defineEmits<{
  (e: 'click'): void
}>()
</script>

<style lang="scss" module>
.button {
  display: var(--button-more-display, inline-block);
  vertical-align: top;
  padding-inline: 24px;
  border-radius: 8px;
  height: 48px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
    inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18),
    inset 0px -2px 0px rgba(10, 13, 18, 0.05);
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  transition: color 0.2s, background-color 0.2s;
}

.ui-default {
  color: var(--navy-blue);
  background: #fff;

  &:enabled {
    @include helpers.hover {
      color: #fff;
      background-color: var(--navy-blue);
    }
  }
}

.ui-primary {
  color: #fff;
  background: var(--vibrant-teal);

  &:disabled {
    opacity: 0.5;
  }

  &:enabled {
    @include helpers.hover {
      color: var(--vibrant-teal);
      background-color: #fff;
    }
  }
}
</style>
