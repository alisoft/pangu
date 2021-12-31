import request from "@/admin/utils/request";
import { PageResult } from "@/admin/api/typing";
import { UserModel } from "@/common/types";

export type LoginType = "password" | "phone" | "qrcode";
export type LoginStatus = "ok" | "error";

export interface LoginParams {
  type: LoginType;
  email: string;
  password: string;
}

export interface LoginResp {
  type: LoginType;
  success: boolean;
  user: UserInfo;
  tokens: TokensInfo;
  // currentAuthority: string;
}

interface TokenInfo {
  token: string;
  expires: Date;
}

interface TokensInfo {
  access: TokenInfo;
  refresh: TokenInfo;
}

export interface UserInfo {
  id: string;
  name: string;
  email: string;
  isEmailVerified: boolean;
  avatar: string;
  country: string;
  group: string;
  phone: string;
  signature: string;
  role: {
    [key: string]: any;
  };
}

export interface CaptchaResp {
  captcha: number;
}

export interface SmsCaptchaRequest {
  mobile: string;
}

// 后端的结构体定义
export type RouteItem = {
  id: number | string;
  parentId: number | string;
  name: string;
  path: string;
  redirect: string;
  component: string;
  children: RouteItem[];
  async: boolean;
  meta: {
    title: string | false;
    icon?: string;
    lock?: boolean;
    target?: "_blank" | "_self";
    hideInMenu?: boolean;
    hideChildrenInMenu?: boolean;
    authority?: string | string[];
    [key: string]: any;
  };
};

export async function postAccountLogin(params: LoginParams) {
  return request.post<LoginParams, LoginResp>("/auth/login", params);
}

export async function getCurrentUser() {
  return request.get<any, UserInfo>("/currentUser");
}

export async function getDynamicMenus() {
  return request.get<any, PageResult<RouteItem>>("/menus");
}

export async function postLogout() {
  return request.post<any, any>("/auth/logout");
}

export async function getSmsCaptcha(params: SmsCaptchaRequest) {
  return request.get<SmsCaptchaRequest, CaptchaResp>("/message/captcha/sms", {
    params,
  });
}
