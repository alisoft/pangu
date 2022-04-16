<template>
  <a-card
    style="height: 100%"
    :loading="loading"
    :bordered="false"
    :title="t('dashboard.analysis.online-top-search')"
  >
    <template #extra>
      <slot name="dropdownGroup" />
    </template>
    <a-row :gutter="68" type="flex">
      <a-col :sm="12" :xs="24" style="margin-bottom: 24px">
        <number-info :gap="8" :total="numeral(12321).format('0,0')" status="up" :sub-total="17.1">
          <template #subTitle>
            <span>
              {{ t('dashboard.analysis.search-users') }}
              <a-tooltip :title="t('dashboard.analysis.introduce')">
                <info-circle-outlined style="margin-left: 8px" />
              </a-tooltip>
            </span>
          </template>
        </number-info>
        <mini-area line :height="45" :data="visitData2" />
      </a-col>
      <a-col :sm="12" :xs="24" style="margin-bottom: 24px">
        <number-info :total="2.7" status="down" :sub-total="26.2" :gap="8">
          <template #subTitle>
            <span>
              {{ t('dashboard.analysis.per-capita-search') }}
              <a-tooltip :title="t('dashboard.analysis.introduce')">
                <info-circle-outlined style="margin-left: 8px" />
              </a-tooltip>
            </span>
          </template>
        </number-info>
        <mini-area line :height="45" :data="visitData2" />
      </a-col>
    </a-row>
    <a-table
      size="small"
      :row-key="record => record.index"
      :columns="state.columns"
      :data-source="searchData"
      :pagination="{
        style: { marginBottom: 0 },
        pageSize: 5,
      }"
    >
      <template #bodyCell="{ text, column, record }">
        <template v-if="column.key === 'keyword'">
          <a href="/">{{ text }}</a>
        </template>
        <template v-else-if="column.key === 'range'">
          <trend :flag="record.status === 1 ? 'down' : 'up'">
            <span style="margin-right: 4px">{{ text }}%</span>
          </trend>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent, reactive } from 'vue';
import { InfoCircleOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n';
import { MiniArea } from './charts';
import NumberInfo from './number-info/index.vue';
import Trend from './trend/index.vue';

import type { SearchDataItem, VisitDataItem } from '@/api/dashboard/analysis';

import numeral from 'numeral';
import type { TableColumn } from '@/typing';

export default defineComponent({
  props: {
    loading: {
      type: Boolean,
      default: () => false,
    },
    visitData2: {
      type: Array as PropType<VisitDataItem[]>,
      default: () => [],
    },
    searchData: {
      type: Array as PropType<SearchDataItem[]>,
      default: () => [],
    },
  },
  setup() {
    const { t } = useI18n();

    const columns: TableColumn[] = [
      {
        title: t('dashboard.analysis.table.rank'),
        dataIndex: 'index',
        key: 'index',
      },
      {
        title: t('dashboard.analysis.table.search-keyword'),
        dataIndex: 'keyword',
        key: 'keyword',
      },
      {
        title: t('dashboard.analysis.table.users'),
        dataIndex: 'count',
        key: 'count',
        sorter: (a: any, b: any) => a.count.length - b.count.length,
        class: 'alignRight',
      },
      {
        title: t('dashboard.analysis.table.weekly-range'),
        dataIndex: 'range',
        key: 'range',
        sorter: (a: Record<string, number>, b: Record<string, number>) => a.range - b.range,
      },
    ];
    const state = reactive({
      columns,
    });
    return {
      t,
      numeral,

      state,
    };
  },
  components: {
    NumberInfo,
    Trend,
    MiniArea,

    // icons
    InfoCircleOutlined,
  },
});
</script>
<style lang="less" scoped>
@import '../style.less';
</style>
