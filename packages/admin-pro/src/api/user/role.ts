import request from '@/utils/request';
import type { PageResult } from '../typing';
import type { Permission, Role } from '@/store/modules/user/typing';

export async function getRoles() {
  return request.get<any, PageResult<Role>>('/roles');
}

export async function getPermissions(): Promise<PageResult<Permission>> {
  return request.get<any, PageResult<Permission>>('/permissions');
}

export async function addPermission(data: Permission) {
  return request.post<Permission, any>('/permission', data);
}

export async function updatePermission(data: Permission) {
  return request.put<Permission, any>('/permission', data);
}
