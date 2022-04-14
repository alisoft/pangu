import request from '@/utils/request';
import type { ResponseBody } from '../typing';

export interface BasicFormData {
  title?: string;
  date?: [string, string];
  goal?: string;
  standard?: string;
}

export interface BasicFormResponse {
  saveId: number;
}

/**
 * Save basic form data to backend
 *
 * @param formData
 * @return Promise<ResponseBody<BasicFormResponse>>
 */
export function saveBasicFormData(
  formData: BasicFormData,
): Promise<ResponseBody<BasicFormResponse>> {
  return request.post('forms/basic-form', formData);
}
