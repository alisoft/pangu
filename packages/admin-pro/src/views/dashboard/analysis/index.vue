<template>
  <grid-content>
    <introduce-row
      :loading="analysisState.loading"
      :visit-data="analysisState.chartData.visitData"
    />
    <sales-card
      :range-picker-value="state.rangePickerValue"
      :sales-data="analysisState.chartData.salesData"
      :is-active="isActive"
      :handle-range-picker-change="handleRangePickerChange"
      :loading="analysisState.loading"
      :select-date="selectDate"
    />
    <a-row :gutter="24" type="flex" style="margin-top: 24px">
      <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <top-search
          :loading="analysisState.loading"
          :visit-data2="analysisState.chartData.visitData2"
          :search-data="analysisState.chartData.searchData"
        >
          <template #dropdownGroup>
            <span class="iconGroup">
              <a-dropdown placement="bottomRight">
                <template #overlay>
                  <a-menu>
                    <a-menu-item>操作一</a-menu-item>
                    <a-menu-item>操作二</a-menu-item>
                  </a-menu>
                </template>
                <ellipsis-outlined />
              </a-dropdown>
            </span>
          </template>
        </top-search>
      </a-col>
      <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <proportion-sales
          :sales-type="state.salesType"
          :loading="analysisState.loading"
          :sales-pie-data="salesPieData"
          :handle-change-sales-type="handleChangeSalesType"
        >
          <template #dropdownGroup>
            <span class="iconGroup">
              <a-dropdown placement="bottomRight">
                <template #overlay>
                  <a-menu>
                    <a-menu-item>操作一</a-menu-item>
                    <a-menu-item>操作二</a-menu-item>
                  </a-menu>
                </template>
                <ellipsis-outlined />
              </a-dropdown>
            </span>
          </template>
        </proportion-sales>
      </a-col>
    </a-row>
    <offline-data
      style="margin-top: 24px"
      :active-key="state.activeKey"
      :loading="analysisState.loading"
      :offline-data="analysisState.chartData.offlineData"
      :offline-chart-data="analysisState.chartData.offlineChartData"
      :handle-tab-change="handleTabChange"
    />
  </grid-content>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRaw } from 'vue';
import { default as GridContent } from '@/components/base-layouts/grid-content/index.vue';
import { EllipsisOutlined } from '@ant-design/icons-vue';
import { getTimeDistance } from './util';

import IntroduceRow from './components/introduce-row.vue';
import SalesCard from './components/sales-card.vue';
import TopSearch from './components/top-search.vue';
import ProportionSales from './components/proportion-sales.vue';
import OfflineData from './components/offline-data.vue';

import { useAnalysisData } from '@/api/dashboard/analysis';
import type { Dayjs } from 'dayjs';

export default defineComponent({
  setup() {
    const state = reactive({
      loading: true,
      salesLoading: true,
      activeKey: 'Stores 0',
      salesType: 'all',
      rangePickerValue: getTimeDistance('year'),
    });

    const { state: analysisState, fetchAllData, fetchSalesData } = useAnalysisData();

    const salesPieData = computed(() => {
      const { salesTypeData, salesTypeDataOnline, salesTypeDataOffline } = analysisState.chartData;
      let salesPieData = [];
      if (state.salesType === 'all') {
        salesPieData = salesTypeData;
      } else {
        salesPieData = state.salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline;
      }
      return salesPieData;
    });

    const handleRangePickerChange = (rangePickerValue: [Dayjs, Dayjs]) => {
      state.rangePickerValue = rangePickerValue;
    };

    const selectDate = (type: any) => {
      state.rangePickerValue = getTimeDistance(type);
      const val = toRaw(state.rangePickerValue);
      fetchSalesData([val[0].format(), val[1].format()]);
    };

    const isActive = (type: any) => {
      const value = getTimeDistance(type);
      if (!state.rangePickerValue[0] || !state.rangePickerValue[1]) {
        return '';
      }
      if (
        state.rangePickerValue[0].isSame(value[0], 'day') &&
        state.rangePickerValue[1].isSame(value[1], 'day')
      ) {
        return 'currentDate';
      }
      return '';
    };

    const handleChangeSalesType = (e: any | Event) => {
      state.salesType = e.target.value;
    };

    const handleTabChange = (key: string) => {
      state.activeKey = key;
    };

    fetchAllData();

    return {
      state,
      analysisState,
      salesPieData,

      isActive,
      selectDate,
      handleRangePickerChange,
      handleTabChange,
      handleChangeSalesType,
    };
  },
  components: {
    GridContent,

    IntroduceRow,
    SalesCard,
    TopSearch,
    ProportionSales,
    OfflineData,

    // icons
    EllipsisOutlined,
  },
});
</script>
