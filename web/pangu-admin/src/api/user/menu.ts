import request from '@/utils/request';
import type { PageResult } from '../typing';
import { MenuModel } from '@/utils/types';

export async function getMenus() {
  return request.get<any, PageResult<MenuModel>>('/menus');
}

export async function addMenu(data: MenuModel) {
  return request.post<MenuModel, any>('/menus', data);
}

export async function updateMenu(id: string, data: MenuModel) {
  return request.put<MenuModel, any>(`/menus/${id}`, data);
}

export async function deleteMenu(id: string) {
  return request.delete<MenuModel, any>(`/menus/${id}`);
}
