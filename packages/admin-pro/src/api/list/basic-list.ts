import request from '@/utils/request';
import type { TableListItem } from '@/views/list/typing';

export async function queryFakeList(params = {}) {
  return request.get<any, TableListItem[]>('/fake_list', {
    params,
  });
}
