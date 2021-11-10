import request from "@/utils/request";

export function loginReq(data) {
  return request({
    url: "/auth/login",
    data,
    method: "POST",
  });
}

export function getInfoReq() {
  return request({
    url: "/users/getUserInfo",
    method: "get",
  });
}

export function logoutReq() {
  return request({
    url: "/users/loginOut",
    method: "get",
  });
}
