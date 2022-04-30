<template>
  <page-container title="Surely Vue 示例(需单独付费)">
    <h2>
      更多示例
      <a href="https://surely.cool" target="_blank">https://surely.cool</a>
    </h2>
    <s-table
      :columns="columns"
      :data-source="dataSource"
      :scroll="{ y: 400, x: 2000 }"
      :pagination="false"
    >
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'operation'">
          <a>Action</a>
        </template>
      </template>
    </s-table>
  </page-container>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const columns = [
  {
    title: 'Full Name',
    dataIndex: 'name',
    fixed: 'left',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    fixed: 'left',
    width: 100,
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
  },
  { title: 'Column 5', dataIndex: 'address' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
  },
];

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

export default defineComponent({
  setup() {
    const data: DataItem[] = [];
    for (let i = 0; i < 1000; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`,
      });
    }
    return {
      dataSource: ref(data),
      columns: ref(columns),
    };
  },
});
</script>
