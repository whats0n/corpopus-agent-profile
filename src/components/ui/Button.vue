<template>
  <component
    :is="resolvedComponent"
    :class="[$style.button, $style[`ui-${ui}`]]"
    v-bind="attrs"
    @click="$emit('click')"
  >
    {{ text }}
  </component>
</template>

<script lang="ts" setup>
import type { ConcreteComponent } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw
    ui?: 'primary' | 'default'
    text: string
  }>(),
  {
    to: undefined,
    ui: 'default',
  },
)

defineEmits<{
  (e: 'click'): void
}>()

const resolvedComponent = computed<ConcreteComponent | string>(() =>
  props.to ? resolveComponent('NuxtLink') : 'button',
)

const attrs = computed<Record<string, unknown>>(() => {
  return props.to ? {} : { type: 'button' }
})
</script>

<style lang="scss" module>
.button {
  display: var(--button-more-display, inline-block);
  vertical-align: top;
  padding-inline: 24px;
  border-radius: 8px;
  height: var(--button-size, var(--default-button-size));
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
    inset 0px 0px 0px 1px rgba(10, 13, 18, 0.18),
    inset 0px -2px 0px rgba(10, 13, 18, 0.05);
  font-size: 16px;
  font-weight: 600;
  line-height: var(--button-size, var(--default-button-size));
  transition: color 0.2s, background-color 0.2s;
  --default-button-size: 48px;

  @include helpers.media($to: sm) {
    padding-inline: 16px;
    font-size: 14px;
    --button-size: 40px;
  }
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
