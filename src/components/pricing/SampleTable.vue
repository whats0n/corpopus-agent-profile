<template>
  <div :class="$style.container">
    <table>
      <thead>
        <tr>
          <th>Service Type</th>
          <th v-for="column in columns" :key="column">
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td>
            <div :class="$style.title">{{ row.title }}</div>
            <div :class="$style.meta">{{ row.meta }}</div>
          </td>
          <td v-for="(column, index) in columns" :key="column">
            {{ row.content[index] || '-' }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import type { SampleTableRow } from '~/types/sample'

defineProps<{
  columns: string[]
  rows: SampleTableRow[]
}>()
</script>

<style lang="scss" module>
.container {
  overflow: hidden;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  color: var(--gray-600);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  table {
    table-layout: fixed;
  }

  th {
    padding-block: 12px;
    border-bottom: 1px solid var(--gray-200);
    color: var(--gray-500);
    background: var(--gray-50);
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }

  td {
    padding-block: 8px;
    vertical-align: middle;
  }

  th,
  td {
    padding-inline: 24px 16px;
    text-align: left;

    &:first-child {
      width: math.div(347, 1216) * 100%;
    }
  }
}

.title {
  color: var(--gray-900);
}

.meta {
  color: var(--gray-600);
  font-size: 14px;
  line-height: 20px;
}
</style>
