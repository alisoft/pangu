import { Request } from "express";
import { Model } from "mongoose";
import { BaseTypes, UserRolePermissionTypes } from "@/node/config/base";
import { RoleTypes } from "@/node/config/roles";

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

export interface PermissionStaticMethod extends Model<PermissionModel> {
  isPermissionTaken(
    permission: string,
    excludePermissionId?: string
  ): Promise<boolean>;
  paginate(filter: any, options: PageOptions): Promise<any>;
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

export interface RoleStaticMethod extends Model<RoleModel> {
  isRoleTaken(role: string, excludeRoleId?: string): Promise<boolean>;
  paginate(filter: any, options: PageOptions): Promise<any>;
}

export interface RolePermissionModel {
  id?: string;
  role?: string;
  permission?: string;
  createBy?: string;
  updateBy?: string;
  isDel?: BaseTypes;
}

export interface RolePermissionStaticMethod extends Model<RolePermissionModel> {
  paginate(filter: any, options: PageOptions): Promise<any>;
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

export interface UserRolePermissionStaticMethod
  extends Model<UserRolePermissionModel> {
  paginate(filter: any, options: PageOptions): Promise<any>;
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

  isPasswordMatch?(password: string): boolean;
}

export interface UserStaticMethod extends Model<UserModel> {
  isEmailTaken(email: string, excludeUserId?: string): Promise<boolean>;
  paginate(filter: any, options: PageOptions): Promise<any>;
}

export type CustomRequest = { user: UserModel } & Request;
