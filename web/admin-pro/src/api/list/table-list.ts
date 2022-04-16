import request from '@/utils/request';
import { reactive } from 'vue';

export async function queryRule(params?: { [key: string]: any }): Promise<RuleResponse> {
  return request.get('/rule', {
    params,
  });
}

export async function removeRule(params: Record<string, any>) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: Record<string, any>) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: Record<string, any>) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}

interface RuleItem {
  key: string | number;
  callNo: number;
  avatar: string;
  desc: string;
  disabled: false;
  href: string;
  name: string;
  owner: string;
  progress: number;
  status: number;
  updatedAt: string;
  createdAt: string;
}

interface RuleResponse {
  current: number;
  data: RuleItem[];
  pageSize: string;
  success: boolean;
  total: number;
}

export function useRuleData() {
  const state = reactive({
    loading: true,
    current: 0,
    pageSize: 10,
    total: 0,
    dataSource: [] as RuleItem[],
  });

  const fetchRule = (params?: Record<string, any>) => {
    // 使 table 打开加载状态指示
    state.loading = true;
    // 发起 AJAX 请求到后端
    queryRule(
      Object.assign(
        {
          current: state.current,
          pageSize: state.pageSize,
        },
        params,
      ),
    )
      .then((res: RuleResponse) => {
        // 更新数据
        state.dataSource = res.data;
        state.total = res.total;
      })
      .finally(() => {
        // 使 table 关闭加载状态指示
        state.loading = false;
      });
  };

  return {
    state,
    fetch: fetchRule,
  };
}
