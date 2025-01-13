<template>
  <div :class="[$style.container, 'container']">
    <div :class="$style.content">
      <div :class="$style.header">
        <h1 :class="[$style.title, 'title-md']">Sample pricing</h1>
        <p :class="$style.description">
          Commitment to excellence begins with transparency. View sample costs,
          tailored to reflect the size and unique requirements of your home.
        </p>
      </div>
      <PricingSampleTable
        :columns="columns"
        :rows="rows"
        :class="$style.table"
      />

      <SharedPricingTabs :items="tabs" :class="$style.tabs" />

      <UiButton
        ui="primary"
        text="Get your custom quote"
        :to="appConfig.url.quoteTrustedfew"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SampleTab, SampleTableRow } from '~/types/sample'

const appConfig = useAppConfig()

const columns: string[] = [
  '2 beds / 1 bath',
  '3 beds / 2 baths',
  '4 beds / 3 baths',
  '5 beds / 4 baths',
]

const rows: SampleTableRow[] = [
  {
    id: 1,
    title: 'One-Time Cleaning',
    meta: 'Move-Out / Move-In, Deep / Spring cleanings',
    content: ['$200-$350', '$300-$500', '$400-$750', '$500-$1500'],
  },
  {
    id: 2,
    title: 'Recurring Cleaning',
    meta: 'Weekly, Bi-Weekly, Monthly cleanings',
    content: ['$180-$300', '$280-$430', '$380-$660', '$450-$1300'],
  },
]

const tabs: SampleTab[] = rows.map((row) => ({
  ...row,
  content: columns
    .map((column, index) => ({
      id: column,
      label: column,
      value: row.content[index],
    }))
    .filter((row) => row.value),
}))
</script>

<style lang="scss" module>
.container {
  padding-inline: 24px;

  @include helpers.media(sm) {
    padding-inline: 32px;
  }
}

.content {
  padding-block: 32px;
  border-bottom: 1px solid var(--gray-200);

  @include helpers.media(sm) {
    padding-block: 60px;
  }
}

.header {
  margin-bottom: 20px;

  @include helpers.media(sm) {
    margin-bottom: 36px;
  }
}

.table {
  margin-bottom: 24px;

  @include helpers.media($to: sm) {
    display: none;
  }

  @include helpers.media(sm) {
    margin-bottom: 36px;
  }
}

.tabs {
  margin-bottom: 24px;

  @include helpers.media(sm) {
    display: none;
  }
}

.title {
  margin-bottom: 8px;
  color: var(--navy-blue);
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

  @include helpers.media(sm) {
    margin-bottom: 12px;
    font-size: 30px;
    line-height: 38px;
  }
}

.description {
  font-size: 14px;
  line-height: 20px;

  @include helpers.media(sm) {
    font-size: 18px;
    line-height: 28px;
  }
}
</style>
