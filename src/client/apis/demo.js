import request from "../utils/request";

export function fetchDemoData() {
  return request({
    url: "/demo",
    method: "get",
  });
}
