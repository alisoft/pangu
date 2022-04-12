import request from '@/utils/request';

export interface RegisterData {
  email: string;
  username: string;
  password: string;
  password2: string;
  captcha: string;
}

export interface RegisterResp {
  data: Record<any, any>;
  success: boolean;
}

export async function postRegister(data: RegisterData) {
  return request.request<RegisterData, RegisterResp>({
    url: '/register',
    method: 'POST',
    data,
  });
}
