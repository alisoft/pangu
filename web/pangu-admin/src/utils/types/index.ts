import { BaseTypes, UserRolePermissionTypes } from './base';
import { RoleTypes } from './roles';

export interface PageOptions {
  sortBy: string;
  limit?: string;
  page?: string;
  populate?: string;
}

export interface PermissionModel {
  id?: string;
  permission?: string;
  name?: string;
  desc?: string;
  createBy?: string;
  updateBy?: string;
  isDel?: BaseTypes;
}

export interface RoleModel {
  id?: string;
  role?: string;
  name?: string;
  desc?: string;
  createBy?: string;
  updateBy?: string;
  isDel?: BaseTypes;
}

export interface RolePermissionModel {
  id?: string;
  role?: string;
  permission?: string;
  createBy?: string;
  updateBy?: string;
  isDel?: BaseTypes;
}

export interface TokenModel {
  id?: string;
  token?: string;
  user?: string;
  type?: string;
  expires?: Date;
  blacklisted?: boolean;
}

export interface UserRolePermissionModel {
  user?: string;
  role?: string;
  permission?: string;
  type?: UserRolePermissionTypes;
  createBy?: string;
  updateBy?: string;
  isDel?: BaseTypes;
}

export interface UserModel {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  role?: RoleTypes;
  isEmailVerified?: boolean;
  createBy?: string;
  updateBy?: string;
  isDel?: BaseTypes;
}

export interface MenuModel {
  id?: string;
  path?: string;
  component?: string;
  name?: string;
  redirect?: string;
  icon?: string;
  title?: string;
  lock?: boolean;
  target?: '_blank' | '_self';
  hideInMenu?: boolean;
  hideChildrenInMenu?: boolean;
  parent?: MenuModel;
  children?: MenuModel[];
  createBy?: string;
  updateBy?: string;
  isDel?: BaseTypes;
}
