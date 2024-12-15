<template>
  <div :class="$style.container">
    <div v-if="title" :class="$style.header">
      <button type="button" :class="$style.back" @click="$emit('back')">
        <UiIcon name="chevron-left" />
      </button>
      <div :class="$style.title">{{ title }}</div>
    </div>
    <div ref="itemsEl" :class="$style.main">
      <button
        v-for="item in items"
        :key="item.id"
        type="button"
        :data-key="item.id"
        :class="$style.item"
        @click="$emit('select', item)"
      >
        {{ item.text }}
      </button>
    </div>
  </div>
</template>

<script
  lang="ts"
  setup
  generic="T extends { id: string | number; text: string | number }"
>
const props = defineProps<{
  title?: string | number
  selected: T['id']
  items: T[]
}>()

const itemsEl = ref<HTMLElement>()

defineEmits<{
  (e: 'back'): void
  (e: 'select', item: T): void
}>()

onMounted(() => {
  itemsEl.value
    ?.querySelector<HTMLButtonElement>(`button[data-key="${props.selected}"]`)
    ?.focus()
})
</script>

<style lang="scss" module>
.container {
  display: grid;
  gap: 4px;
}

.header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px;
  align-items: center;
  margin-bottom: 8px;
  padding-right: 30px;
}

.back {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  transition: color 0.2s, background-color 0.2s;

  @include helpers.hover {
    color: #fff;
    background: var(--vibrant-teal);
  }

  svg {
    width: 20px;
  }
}

.title {
  color: var(--navy-blue);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
}

.main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  height: 198px;
  overflow: auto;
}

.item {
  min-height: 30px;
  overflow: hidden;
  font-size: 14px;
  line-height: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 3px;
  transition: color 0.2s, background-color 0.2s;

  @include helpers.hover {
    color: #fff;
    background: var(--vibrant-teal);
  }
}
</style>
