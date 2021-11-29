import request from "@/admin/utils/request";

// use request util will ignore `/api/` path

export async function fakeSubmitForm(params = {}) {
  return request.post("forms", params);
}
