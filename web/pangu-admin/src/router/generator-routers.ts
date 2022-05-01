import { h } from 'vue';
import type { MenuDataItem } from './typing';
import type { RouteItem } from '@/api/user/login';
import { getDynamicMenus } from '@/api/user/login';
import { MenuModel } from '@/utils/types';

const defineRouteComponents: Record<string, any> = {
  BasicLayout: () => import('@/layouts/index.vue'),
  RouteView: () => import('@/layouts/route-view.vue'),
  PageView: () => import('@/layouts/route-view.vue'),
};

const defineRouteComponentKeys = Object.keys(defineRouteComponents);

export const generator = (routeMap: RouteItem[], parent: string | undefined, index: number) => {
  return routeMap
    .filter(item => item.parent === parent)
    .map(item => {
      const { title, hideInMenu, hideChildrenInMenu, target, icon, authority, lock } = item || {};

      const comp =
        item.component && defineRouteComponentKeys.includes(item.component)
          ? defineRouteComponents[item.component]
          : () => import(/* @vite-ignore */ `@/views/${item.component}`);

      const currentRouter: MenuDataItem = {
        // 如果路由设置了 path，则作为默认 path，否则 路由地址 动态拼接生成如 /dashboard/workplace
        path: item.path,
        // 路由名称，建议唯一
        name: item.name || `${item.id}`,
        // meta: 页面标题, 菜单图标, 页面权限(供指令权限用，可去掉)
        meta: {
          title,
          icon: icon || undefined,
          hideInMenu,
          hideChildrenInMenu,
          target: target,
          authority: authority,
          lock,
        },
        index,
        // 该路由对应页面的 组件 (动态加载 @/views/ 下面的路径文件)
        component: comp,
      };

      // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
      if (!currentRouter.path.startsWith('http')) {
        currentRouter.path = currentRouter.path.replace('//', '/');
      }

      // 重定向
      item.redirect && (currentRouter.redirect = item.redirect);

      // 子菜单，递归处理
      currentRouter.children = generator(routeMap, item.id, index + 1);
      if (currentRouter.children === undefined || currentRouter.children.length <= 0) {
        delete currentRouter.children;
      }

      if (currentRouter.index === 1 && !currentRouter.children) {
        currentRouter.component = h(require('@/layouts/route-view.vue').default, {}, () =>
          h(require(`@/views/${item.component}`).default),
        );
      }

      return currentRouter;
    })
    .filter(item => item);
};

export const generatorMenus = (routeMap: MenuModel[], parent: string | undefined) => {
  return routeMap
    .filter(item => item.parent === parent)
    .map(item => {
      // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
      if (item.path && !item.path.startsWith('http')) {
        item.path = item.path.replace('//', '/');
      }

      // 子菜单，递归处理
      item.children = generatorMenus(routeMap, item.id);
      if (item.children === undefined || item.children.length <= 0) {
        delete item.children;
      }
      return item;
    })
    .filter(item => item);
};

export const generatorDynamicRouter = () => {
  return new Promise<MenuDataItem[]>((resolve, reject) => {
    getDynamicMenus()
      .then(menuNav => {
        // root id = 0;
        const rootRouter = generator(menuNav.data, undefined, 0) as MenuDataItem[];
        console.log(rootRouter);
        // routes.push(notFoundRouter);
        resolve(rootRouter);
      })
      .catch(err => {
        reject(err);
      });
  });
};
