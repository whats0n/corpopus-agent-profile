<template>
  <div :class="$style.container">
    <h2 class="title-md">
      {{ title }}
    </h2>
    <div :class="$style.tabs">
      <div :class="$style.controls">
        <button
          v-if="leftTab"
          type="button"
          :class="[
            $style.control,
            selectedTab === Tabs.left && $style.isSelected,
          ]"
          @click="selectedTab = Tabs.left"
        >
          {{ leftTab.title }}
        </button>
        <button
          v-if="rightTab"
          type="button"
          :class="[
            $style.control,
            selectedTab === Tabs.right && $style.isSelected,
          ]"
          @click="selectedTab = Tabs.right"
        >
          {{ rightTab.title }}
        </button>
      </div>
      <ul :class="$style.content">
        <li v-for="item in selectedItems" :key="`${item.title}:${item.value}`">
          <div :class="$style.subtitle">
            {{ item.title }}
          </div>
          <div :class="$style.value">
            {{ item.value }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {
  ProfileCostRange,
  ProfileCostRangeItem,
} from '~/types/profile/costRange'

const props = defineProps<ProfileCostRange>()

enum Tabs {
  left = 'left',
  right = 'right',
}

const selectedTab = ref<Tabs>(Tabs.left)

const selectedItems = computed<ProfileCostRangeItem[]>(() => {
  switch (selectedTab.value) {
    case Tabs.left: {
      return props.leftTab?.items || []
    }

    case Tabs.right: {
      return props.rightTab?.items || []
    }

    default: {
      return []
    }
  }
})
</script>

<style lang="scss" module>
.container {
  position: relative;
}
</style>
