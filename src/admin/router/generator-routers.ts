import { defineAsyncComponent } from "vue";
import type { MenuDataItem } from "./typing";
import type { RouteItem, RouteItem2 } from "../api/user/login";
import { getDynamicMenus, getDynamicMenus2 } from "../api/user/login";

export const generator = (routeMap: RouteItem[]) => {
  return routeMap
    .map((item) => {
      const {
        title,
        hideInMenu,
        hideChildrenInMenu,
        target,
        icon,
        authority,
        lock,
      } = item.meta || {};
      const currentRouter: MenuDataItem = {
        // 如果路由设置了 path，则作为默认 path，否则 路由地址 动态拼接生成如 /dashboard/workplace
        path: item.path,
        // 路由名称，建议唯一
        name: item.name || `${item.id}`,
        // meta: 页面标题, 菜单图标, 页面权限(供指令权限用，可去掉)
        meta: {
          title,
          icon: icon || undefined,
          lock: lock || false,
          hideInMenu,
          hideChildrenInMenu,
          target: target,
          authority: authority,
        },
        // 该路由对应页面的 组件 (动态加载 @/admin/views/ 下面的路径文件)
        component: item.async
          ? defineAsyncComponent(
              () => import(/* @vite-ignore */ `@/admin${item.component}`)
            )
          : () => import(/* @vite-ignore */ `@/admin${item.component}`),
      };

      // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
      if (!currentRouter.path.startsWith("http")) {
        currentRouter.path = currentRouter.path.replace("//", "/");
      }

      // 重定向
      item.redirect && (currentRouter.redirect = item.redirect);

      // 子菜单，递归处理
      item.children && (currentRouter.children = generator(item.children));
      return currentRouter;
    })
    .filter((item) => item);
};

export const generator2 = (
  routeMap: RouteItem2[],
  parent: string | undefined
) => {
  return routeMap
    .filter((item) => item.parent === parent)
    .map((item) => {
      const { title, hideInMenu, hideChildrenInMenu, target, icon, authority } =
        item || {};
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
        },
        // 该路由对应页面的 组件 (动态加载 @/admin/views/ 下面的路径文件)
        component: item.async
          ? defineAsyncComponent(
              () => import(/* @vite-ignore */ `@/admin${item.component}`)
            )
          : () => import(/* @vite-ignore */ `@/admin${item.component}`),
      };

      // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
      if (!currentRouter.path.startsWith("http")) {
        currentRouter.path = currentRouter.path.replace("//", "/");
      }

      // 重定向
      item.redirect && (currentRouter.redirect = item.redirect);

      // 子菜单，递归处理
      currentRouter.children = generator2(routeMap, item.id);
      if (
        currentRouter.children === undefined ||
        currentRouter.children.length <= 0
      ) {
        delete currentRouter.children;
      }
      return currentRouter;
    })
    .filter((item) => item);
};

export const generatorDynamicRouter = () => {
  return new Promise<MenuDataItem[]>((resolve, reject) => {
    getDynamicMenus()
      .then((menuNav) => {
        // root id = 0;
        const rootRouter = generator(menuNav.data) as MenuDataItem[];
        // routes.push(notFoundRouter);
        resolve(rootRouter);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const generatorDynamicRouter2 = () => {
  return new Promise<MenuDataItem[]>((resolve, reject) => {
    getDynamicMenus2()
      .then((menuNav) => {
        // root id = 0;
        const rootRouter = generator2(
          menuNav.data,
          undefined
        ) as MenuDataItem[];
        // routes.push(notFoundRouter);
        resolve(rootRouter);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
