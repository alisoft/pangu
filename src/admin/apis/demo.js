import request from "../utils/request";

export async function fetchDemoData() {
  return request({
    url: "/demo",
    method: "get",
  });
}
