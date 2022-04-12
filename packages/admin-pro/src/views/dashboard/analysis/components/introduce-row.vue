<template>
  <a-row :gutter="24" type="flex">
    <a-col v-bind="gridLayout" style="margin-bottom: 24px">
      <chart-card :bordered="false" :loading="loading" :content-height="46">
        <template #title>{{ t('dashboard.analysis.total-sales') }}</template>
        <template #action>
          <a-tooltip :title="t('dashboard.analysis.introduce')">
            <info-circle-outlined />
          </a-tooltip>
        </template>
        <template #total>
          <yuan :value="126560" />
        </template>
        <trend flag="up" style="margin-right: 16px">
          {{ t('dashboard.analysis.week') }}
          <span class="trendText">12%</span>
        </trend>
        <trend flag="down">
          {{ t('dashboard.analysis.day') }}
          <span class="trendText">11%</span>
        </trend>
        <template #footer>
          <field
            :label="t('dashboard.analysis.day-sales')"
            :value="`${numeral(12423).format('0,0')}`"
          />
        </template>
      </chart-card>
    </a-col>
    <a-col v-bind="gridLayout" style="margin-bottom: 24px">
      <chart-card :bordered="false" :loading="loading" :content-height="46">
        <template #title>{{ t('dashboard.analysis.visits') }}</template>
        <template #action>
          <a-tooltip :title="t('dashboard.analysis.introduce')">
            <info-circle-outlined />
          </a-tooltip>
        </template>
        <template #total>
          <yuan :value="numeral(8846).format('0,0')" />
        </template>
        <template #footer>
          <field
            :label="t('dashboard.analysis.day-visits')"
            :value="`${numeral(12423).format('0,0')}`"
          />
        </template>
        <mini-area color="#975FE4" :data="visitData" />
      </chart-card>
    </a-col>
    <a-col v-bind="gridLayout" style="margin-bottom: 24px">
      <chart-card :bordered="false" :loading="loading" :content-height="46">
        <template #title>{{ t('dashboard.analysis.payments') }}</template>
        <template #action>
          <a-tooltip :title="t('dashboard.analysis.introduce')">
            <info-circle-outlined />
          </a-tooltip>
        </template>
        <template #total>
          <yuan :value="numeral(6560).format('0,0')" />
        </template>
        <template #footer>
          <field :label="t('dashboard.analysis.conversion-rate')" value="60%" />
        </template>
        <mini-bar :data="visitData" />
      </chart-card>
    </a-col>
    <a-col v-bind="gridLayout" style="margin-bottom: 24px">
      <chart-card :bordered="false" :loading="loading" :content-height="46" total="78%">
        <template #title>{{ t('dashboard.analysis.operational-effect') }}</template>
        <template #action>
          <a-tooltip :title="t('dashboard.analysis.introduce')">
            <info-circle-outlined />
          </a-tooltip>
        </template>
        <template #footer>
          <div style="white-space: nowrap; overflow: hidden">
            <trend flag="up" style="margin-right: 16px">
              {{ t('dashboard.analysis.week') }}
              <span class="trendText">12%</span>
            </trend>
            <trend flag="down">
              {{ t('dashboard.analysis.day') }}
              <span class="trendText">11%</span>
            </trend>
          </div>
        </template>
        <mini-progress :percent="78" :stroke-width="8" :target="80" color="#13C2C2" />
      </chart-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';
import { InfoCircleOutlined } from '@ant-design/icons-vue';
import { ChartCard, Field, MiniProgress, MiniBar, MiniArea } from './charts';
import Yuan from './yuan.vue';
import Trend from './trend/index.vue';
import numeral from 'numeral';
import type { VisitDataItem } from '@/api/dashboard/analysis';
import { useI18n } from 'vue-i18n';

const gridLayout = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
};

export default defineComponent({
  name: 'IntroduceRow',
  props: {
    loading: {
      type: Boolean,
      default: () => false,
    },
    visitData: {
      type: Array as PropType<VisitDataItem[]>,
      required: true,
    },
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
      gridLayout,
      numeral,
    };
  },
  components: {
    ChartCard,
    Field,
    Trend,
    MiniProgress,
    MiniBar,
    MiniArea,
    Yuan,

    // icons
    InfoCircleOutlined,
  },
});
</script>
