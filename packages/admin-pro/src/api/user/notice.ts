import request from '@/utils/request';
import type { CSSProperties } from '@vue/runtime-dom';

export type NoticeIconData = {
  avatar?: string;
  title?: string;
  description?: string;
  datetime?: string;
  extra?: string;
  style?: CSSProperties;
  key?: string | number;
  read?: boolean;
};

export type NoticeItem = {
  id: string;
  type: string;
  status: string;
} & NoticeIconData;

export async function queryNotices() {
  return request.get<any, NoticeItem[]>('/notices');
}

export async function changeNoticeReadState(notices: any[]): Promise<any> {
  return request.post('/change-notices-read', notices);
}
