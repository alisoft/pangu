import request from '@/utils/request';

export type LoginType = 'account' | 'telephone';
export type LoginStatus = 'ok' | 'error';

export interface LoginParams {
  type: LoginType;
  username: string;
  password: string;
}

export interface LoginResp {
  type: LoginType;
  success: boolean;
  token: string;
  // currentAuthority: string;
}

export interface UserInfo {
  id: string | number;
  address: string;
  avatar: string;
  country: string;
  email: string;
  group: string;
  name: string;
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
  meta: {
    title: string | false;
    icon?: string;
    target?: '_blank' | '_self';
    hideInMenu?: boolean;
    hideChildrenInMenu?: boolean;
    authority?: string | string[];
    [key: string]: any;
  };
};

export async function postAccountLogin(params: LoginParams) {
  return request.post<LoginParams, LoginResp>('/login/account', params);
}

export async function getCurrentUser() {
  return request.get<any, UserInfo>('/currentUser');
}

export async function getCurrentUserNav() {
  return request.get<any, RouteItem[]>('/currentUserNav');
}

export async function postLogout() {
  return request.post<any, any>('/logout');
}

export async function getSmsCaptcha(params: SmsCaptchaRequest) {
  return request.get<SmsCaptchaRequest, CaptchaResp>('/message/captcha/sms', {
    params,
  });
}
