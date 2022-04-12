<template>
  <grid-content>
    <a-row :gutter="24">
      <a-col :xl="18" :lg="24" :md="24" :sm="24" :xs="24" style="margin-bottom: 24px">
        <a-card
          :title="t('dashboard.monitor.trading-activity')"
          :bordered="false"
          style="height: 100%"
        >
          <a-row>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic
                :title="t('dashboard.monitor.total-transactions')"
                suffix="元"
                :value="numeral(124543233).format('0,0')"
              />
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic :title="t('dashboard.monitor.sales-target')" value="92%" />
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic-countdown
                :title="t('dashboard.monitor.remaining-time')"
                :value="new Date().getTime() + 3900000"
              />
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic
                :title="t('dashboard.monitor.total-transactions-per-second')"
                suffix="元"
                :value="numeral(234).format('0,0')"
              />
            </a-col>
          </a-row>
          <div class="map-chart">
            <a-tooltip :title="t('dashboard.monitor.waiting-for-implementation')">
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/HBWnDEUXCnGnGrRfrpKa.png"
                alt="map"
              />
            </a-tooltip>
          </div>
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card
          :title="t('dashboard.monitor.activity-forecast')"
          style="margin-bottom: 24px"
          :bordered="false"
        >
          <active-chart />
        </a-card>
        <a-card
          :title="t('dashboard.monitor.efficiency')"
          style="margin-bottom: 24px"
          :body-style="{ textAlign: 'center' }"
          :bordered="false"
        >
          <gauge :height="180" :percent="87" />
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :xl="12" :lg="24" :sm="24" :xs="24" style="margin-bottom: 24px">
        <a-card
          :title="t('dashboard.monitor.proportion-per-category')"
          :bordered="false"
          class="pie-card"
        >
          <a-row style="padding: 16px 0">
            <a-col :span="8">
              <pie
                :percent="28"
                :title="t('dashboard.monitor.fast-food')"
                total="28%"
                :height="128"
              />
            </a-col>
            <a-col :span="8">
              <pie
                color="#5DDECF"
                total="22%"
                :title="t('dashboard.monitor.western-food')"
                :percent="22"
                :height="128"
              />
            </a-col>
            <a-col :span="8">
              <pie
                color="#2FC25B"
                total="32%"
                :title="t('dashboard.monitor.hot-pot')"
                :percent="32"
                :height="128"
              />
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" style="margin-bottom: 24px">
        <a-card
          :title="t('dashboard.monitor.popular-searches')"
          :loading="context.loading"
          :bordered="false"
          :body-style="{ overflow: 'hidden' }"
        >
          <tag-cloud :tags="context.dataSource" :height="161" />
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" style="margin-bottom: 24px">
        <a-card
          :title="t('dashboard.monitor.resource-surplus')"
          :body-style="{ textAlign: 'center', fontSize: 0 }"
          :bordered="false"
        >
          <water-wave :height="161" :title="t('dashboard.monitor.fund-surplus')" :percent="34" />
        </a-card>
      </a-col>
    </a-row>
  </grid-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { default as GridContent } from '@/components/base-layouts/grid-content/index.vue';
import { Gauge, Pie, TagCloud, WaterWave } from './components/charts';
import { queryTags } from '@/api/dashboard/monitor';
import ActiveChart from './components/active-chart/index.vue';

import numeral from 'numeral';
import { useFetchData } from '@/utils/hooks/useFetchData';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const { context } = useFetchData(
      () => {
        return queryTags().then(res => {
          return {
            data: res.list,
            total: 100,
          };
        });
      },
      {
        loading: false,
      },
    );

    return {
      t,
      numeral,

      context,
    };
  },
  components: {
    GridContent,
    ActiveChart,
    Gauge,
    Pie,
    TagCloud,
    WaterWave,
  },
});
</script>

<style lang="less" scoped>
@import './style.less';
</style>
