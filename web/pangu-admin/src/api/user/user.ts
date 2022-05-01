import request from '@/utils/request';
import type { PageResult } from '../typing';
import { UserModel } from '@/utils/types';

export async function getUsers() {
  return request.get<any, PageResult<UserModel>>('/users');
}

export async function addUser(data: UserModel) {
  return request.post<UserModel, any>('/users', data);
}

export async function updateUser(id: string, data: UserModel) {
  return request.put<UserModel, any>(`/users/${id}`, data);
}

export async function deleteUser(id: string) {
  return request.delete<UserModel, any>(`/users/${id}`);
}
