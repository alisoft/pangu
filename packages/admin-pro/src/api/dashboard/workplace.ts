import request from '@/utils/request';

export async function queryProjectNotice(): Promise<any> {
  return request('/project/notice');
}

export async function queryActivities(): Promise<any> {
  return request('/activities');
}

export async function fakeChartData(): Promise<any> {
  return request('/fake_chart_data');
}

export async function queryCurrent(): Promise<any> {
  return request('/currentUser');
}
