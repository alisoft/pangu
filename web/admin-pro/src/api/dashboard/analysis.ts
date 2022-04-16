import { reactive } from 'vue';
import request from '@/utils/request';

export interface VisitDataItem {
  x: string;
  y: number;
}

export interface SalesDataItem {
  x: string;
  y: number;
}

export interface SearchDataItem {
  index: number | string;
  keyword: string;
  count: number;
  range: number;
  status: number;
}

export interface OfflineDataItem {
  name: string;
  cvr: number;
}

export interface OfflineChartDataItem {
  x: number;
  y1: number;
  y2: number;
}

export interface RadarDataItem {
  name: string;
  label: string;
  value: number | string;
}

export interface ChartData {
  offlineChartData: OfflineChartDataItem[];
  offlineData: OfflineDataItem[];
  radarData: RadarDataItem[];
  salesData: SalesDataItem[];
  salesTypeData: SalesDataItem[];
  salesTypeDataOffline: SalesDataItem[];
  salesTypeDataOnline: SalesDataItem[];
  searchData: SearchDataItem[];
  visitData: VisitDataItem[];
  visitData2: VisitDataItem[];
}

export function getAnalysisChartData(): Promise<ChartData> {
  return request.get('dashboard/fake_chart_data');
}

export type SalesRangeType = [string, string];

export function getAnalysisSalesData(range: SalesRangeType): Promise<SalesDataItem[]> {
  return request.get('dashboard/fake_chart_sales_data', {
    params: {
      range,
    },
  });
}

export interface AnalysisData {
  state: {
    loading: boolean;
    chartData: ChartData;
  };
  fetchAllData: () => void;
  fetchSalesData: (rangeDate: [string, string]) => void;
}

export const useAnalysisData = (): AnalysisData => {
  const state = reactive({
    loading: true,
    chartData: {
      offlineChartData: [],
      offlineData: [],
      radarData: [],
      salesData: [],
      salesTypeData: [],
      salesTypeDataOffline: [],
      salesTypeDataOnline: [],
      searchData: [],
      visitData: [],
      visitData2: [],
    } as ChartData,
  });

  const fetchAllData = () => {
    state.loading = true;
    // fetch backend JSON api data.
    getAnalysisChartData()
      .then(res => {
        state.chartData = {
          ...res,
        };
      })
      .finally(() => {
        state.loading = false;
      });
  };

  const fetchSalesData = (rangeDate: [string, string]) => {
    state.loading = true;
    getAnalysisSalesData(rangeDate)
      .then(res => {
        state.chartData.salesData = res;
      })
      .finally(() => {
        state.loading = false;
      });
  };

  return {
    state,
    fetchAllData,
    fetchSalesData,
  };
};
