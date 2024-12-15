<template>
  <div :class="$style.wrapper">
    <div :id="id" :class="$style.container" />
  </div>
</template>

<script setup lang="ts">
import L from 'leaflet'

const props = defineProps<{
  center: [number, number]
  zoom?: number
}>()

const map = ref<L.Map | null>(null)

const id = useId()

onMounted(() => {
  const mapInstance = L.map(id, { scrollWheelZoom: false }).setView(
    props.center,
    props.zoom || 10,
  )

  L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(mapInstance)

  map.value = mapInstance
})

onBeforeUnmount(() => {
  if (map.value) map.value.remove()
})
</script>

<style lang="scss" module>
.wrapper {
  position: relative;
  z-index: 1;
}

.container {
  width: var(--map-width, 100%);
  height: var(--map-height, 600px);
}
</style>
