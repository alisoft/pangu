import request from "@/admin/utils/request";
import type { TableListItem } from "@/admin/views/list/typing";

export async function queryFakeList(params = {}) {
  return request.get<any, TableListItem[]>("/fake_list", {
    params,
  });
}
