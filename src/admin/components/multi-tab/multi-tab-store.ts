import type { InjectionKey, UnwrapRef } from "vue";
import {
  KeepAlive,
  cloneVNode,
  reactive,
  createVNode,
  toRaw,
  defineComponent,
  watch,
  provide,
  inject,
  computed,
} from "vue";
import type {
  RouteLocationNormalized,
  RouteRecordNormalized,
} from "vue-router";
import { useRouter, useRoute } from "vue-router";
import { message } from "ant-design-vue";
import { flattenChildren } from "@/admin/utils/vnode-util";
import findLast from "lodash.findlast";
import omit from "lodash.omit";
import { useStore } from "vuex";

export type CacheKey = string;

export interface CacheItem {
  path: CacheKey;
  route: Omit<RouteLocationNormalized, "matched">;
  key?: string;
  lock?: boolean;
  tabTitle?: string;
  tabPath?: string;
}

export interface MultiTabStore {
  cacheList: CacheItem[];
  current: CacheKey;
  include: string[];
  exclude: string[];
}

export type CallerFunction = {
  close: (path: CacheKey) => void; // 关闭指定路径标签
  closeLeft: (selectedPath: CacheKey) => void; // 关闭指定路径左侧标签
  closeRight: (selectedPath: CacheKey) => void; // 关闭指定路径右侧标签
  closeOther: (selectedPath: CacheKey) => void; // // 关闭除指定路径之外的标签
  getCaches: () => void; // 获取缓存列表
  clearCache: (path: CacheKey) => void; // 清空缓存
  refresh: (path?: CacheKey | undefined) => void; // 刷新指定路径
};

export type Options = {
  defaultHomePage?: string;
};

export type MultiTabType = [CallerFunction];

let g = 1;
const guid = () => {
  return `CacheKey_${++g}`;
};

const MULTI_TAB_STORE_KEY: InjectionKey<MultiTabStore> =
  Symbol("multi-tab-store");
export const useMultiTabStateProvider = (
  initCacheList: Omit<CacheItem, "component" | "key">[] = []
): UnwrapRef<MultiTabStore> => {
  // 定义保留的多标签状态
  const state = reactive<MultiTabStore>({
    cacheList: [],
    current: "",
    exclude: [],
    include: [],
  });
  state.cacheList.push(
    ...initCacheList.map((item) => ({ ...item, key: guid() } as CacheItem))
  );
  provide(MULTI_TAB_STORE_KEY, state);
  return state;
};

export const injectMultiTabStore = () => {
  return inject(MULTI_TAB_STORE_KEY)!;
};

const findMatchedRoute = (
  route: RouteLocationNormalized
): RouteRecordNormalized | RouteLocationNormalized => {
  const matched: RouteRecordNormalized[] = route.matched || [];
  return (
    (findLast(matched, (m) => {
      return m.meta && m.meta.mergeTab;
    }) as RouteRecordNormalized) || route
  );
};

// 创建消费端
export const MultiTabStoreConsumer = defineComponent({
  name: "MultiTabStoreConsumer",
  setup(_props, { slots = {} }) {
    const route = useRoute();
    const state = inject(MULTI_TAB_STORE_KEY)!;
    const store = useStore();
    const multiTab = computed(() => store.getters["app/multiTab"]);
    const hasCache = (path: CacheKey) => {
      return state.cacheList.find((item) => item.tabPath === path);
    };
    watch(
      () => route.fullPath,
      () => {
        state.current = route.path;
        const index = state.cacheList.findIndex(
          (item) => item.path === route.path
        );
        if (state.cacheList[index]) {
          state.cacheList[index].route = { ...omit(route, ["matched"]) };
        }
      },
      { immediate: true }
    );
    return () => {
      if (!multiTab.value) return slots.default?.()[0];
      const component = flattenChildren(
        (slots.default && slots.default()) || []
      )[0] as any;
      if (!component) {
        return null;
      }
      const tabRoute = findMatchedRoute(route);
      // 是否存在 cache
      let cacheItem = hasCache(tabRoute.path);
      if (!cacheItem) {
        cacheItem = {
          path: route.path,
          route: { ...omit(route, ["matched"]) },
          key: guid(),
          tabTitle: tabRoute?.meta?.title as string,
          tabPath: tabRoute.path,
          lock: !!route.meta.lock,
        };
        state.cacheList.push(cacheItem);
      } else if (cacheItem.path !== route.path) {
        // 处理 mergeTab 逻辑
        Object.assign(cacheItem, {
          path: route.path,
          route: { ...omit(route, ["matched"]) },
          key: guid(),
          tabTitle: tabRoute?.meta?.title,
          tabPath: tabRoute.path,
          lock: !!route.meta.lock,
        });
      }
      const exclude = [...state.exclude];
      if (route.meta.keepAlive === false) {
        exclude.push(cacheItem.key!);
      }
      component.type.name = cacheItem.key;
      return createVNode(
        KeepAlive,
        { exclude },
        {
          default: () =>
            cloneVNode(component, { key: cacheItem!.key + route.fullPath }),
        }
      );
    };
  },
});

export const useMultiTab = (/*options?: Options*/): MultiTabType => {
  const router = useRouter();
  const route = useRoute();
  const state = inject(MULTI_TAB_STORE_KEY)!;
  const clearCache = async (path: CacheKey) => {
    const cacheItem = state.cacheList.find((item) => item.path === path);
    state.exclude = [cacheItem?.key as string];
    new Promise<void>((resolve) => {
      setTimeout(() => {
        state.exclude = [];
        resolve();
      });
    });
  };

  const close = (path?: CacheKey) => {
    if (!path) {
      path = state.current;
    }
    const currentPageIndex = state.cacheList.findIndex(
      (item) => item.path === path
    );
    if (state.cacheList.length === 1) {
      message.info("这是最后一个标签了, 无法被关闭");
      return;
    }
    clearCache(path);
    if (path !== state.current) {
      state.cacheList.splice(currentPageIndex, 1);
      return;
    }
    const targetIndex =
      currentPageIndex === 0 ? currentPageIndex + 1 : currentPageIndex - 1;
    router
      .replace(state.cacheList[targetIndex].route)
      .then(() => {
        state.cacheList.splice(currentPageIndex, 1);
      })
      .catch();
  };

  const getCaches = () => {
    return state.cacheList;
  };

  // alias
  const refresh = async (path?: CacheKey | undefined) => {
    if (!path) {
      path = state.current;
    }
    await clearCache(path);
    const cacheItemIndex = state.cacheList.findIndex(
      (item) => item.path === path
    );
    const cacheItem = state.cacheList[cacheItemIndex];
    state.cacheList[cacheItemIndex] = { ...toRaw(cacheItem), key: guid() };
    return new Promise<void>((resolve) => {
      router.replace(cacheItem?.route || { path }).finally(() => {
        // 模拟loading效果，加载太快，loading 不明显，主动加个延时 ，如不需要可删除延迟
        setTimeout(() => {
          resolve();
        }, 900);
      });
    });
  };

  const deleteCaches = (start: number, num: number) => {
    const list = state.cacheList;
    const end = start + num;
    const newList: CacheItem[] = [];
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (i < start || i >= end || item.lock) {
        newList.push(item);
      }
    }
    state.cacheList = newList;
  };

  const closeLeft = (selectedPath: CacheKey) => {
    const index = state.cacheList.findIndex(
      (item) => item.path === selectedPath
    );
    const currentIndex = state.cacheList.findIndex(
      (item) => item.path === route.path
    );
    if (currentIndex < index) {
      router
        .replace(state.cacheList[index].route)
        .then(() => {
          deleteCaches(0, index);
        })
        .catch();
    } else {
      deleteCaches(0, index);
    }
  };

  const closeRight = (selectedPath: CacheKey) => {
    const index = state.cacheList.findIndex(
      (item) => item.path === selectedPath
    );
    const currentIndex = state.cacheList.findIndex(
      (item) => item.path === route.path
    );
    if (currentIndex > index) {
      router
        .replace(state.cacheList[index].route)
        .then(() => {
          deleteCaches(index + 1, state.cacheList.length - index - 1);
        })
        .catch();
    } else {
      deleteCaches(index + 1, state.cacheList.length - index - 1);
    }
  };

  const closeOther = (selectedPath: CacheKey) => {
    const index = state.cacheList.findIndex(
      (cached) => cached.path === selectedPath
    );
    router
      .replace(state.cacheList[index].route)
      .then(() => {
        deleteCaches(index + 1, state.cacheList.length - index - 1);
        deleteCaches(0, index);
      })
      .catch();
  };

  return [
    {
      close,
      getCaches,
      clearCache,
      closeLeft,
      closeRight,
      closeOther,
      refresh,
    },
  ];
};

export default useMultiTab;
