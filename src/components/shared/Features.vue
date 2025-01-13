<template>
  <div :class="[$style.container, 'container']">
    <div :class="$style.inner">
      <div v-for="item in items" :key="item.index" :class="$style.item">
        <div :class="$style.index">{{ item.index }}</div>
        <div :class="$style.title">{{ item.title }}</div>
        <div :class="$style.description">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface FeatureItem {
  index: number
  title: string
  description: string
}

const items: FeatureItem[] = [
  {
    index: 1,
    title: 'Find a cleaner',
    description:
      'Browse our database to discover experienced cleaning professionals near you.',
  },
  {
    index: 2,
    title: 'Request a quote',
    description:
      'Share your needs and get transparent pricing tailored to your home.',
  },
  {
    index: 2,
    title: 'Confirm and relax',
    description:
      'Book your cleaner and enjoy a spotless home—quick, simple, and hassle-free.',
  },
]
</script>

<style lang="scss" module>
.container {
  @include helpers.media(sm) {
    text-align: center;
    padding-inline: 32px;
  }
}

.inner {
  display: grid;
  gap: 32px;
  padding-block: 64px;
  border-bottom: 1px solid var(--gray-200);

  @include helpers.media($to: sm) {
    padding: 32px 24px;
  }

  @include helpers.media(sm) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.index {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  border-radius: 50%;
  width: 36px;
  aspect-ratio: 1/1;
  color: var(--vibrant-teal);
  background: var(--success-100);
  font-size: 20px;

  @include helpers.media(sm) {
    margin-inline: auto;
    margin-bottom: 16px;
    width: 48px;
  }
}

.title {
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--navy-blue);

  @include helpers.media(sm) {
    font-size: 20px;
    line-height: 30px;
  }
}

.description {
  font-size: 14px;
  line-height: 20px;

  @include helpers.media(sm) {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
