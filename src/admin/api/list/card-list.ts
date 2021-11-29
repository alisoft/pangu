import request from "@/admin/utils/request";

export async function queryFakeList(params = {}): Promise<any> {
  return request.get("/fake_list", {
    params,
  });
}
