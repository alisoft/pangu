import type { ActionTree } from 'vuex';
import type { RouteRecordRaw } from 'vue-router';
import type { Role, UserState } from './typing';
import type { RootState } from '@/store/root-state';
import { RESET_CURRENT_USER, SET_INFO, SET_ROUTERS, SET_TOKEN } from './mutations';
import type { LoginParams, UserInfo } from '@/api/user/login';
import { postAccountLogin, getCurrentUser, postLogout } from '@/api/user/login';
import { default as router, routes } from '@/router';
import { filterMenu } from '@/utils/menu-util';
import { hasAuthority, filterChildRoute } from '@/utils/authority';
import { generatorDynamicRouter } from '@/router/generator-routers';
import type { MenuDataItem } from '@/router/typing';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_INFO = 'GET_INFO';
export const GENERATE_ROUTES = 'GenerateRoutes';
export const GENERATE_ROUTES_DYNAMIC = '';

export const actions: ActionTree<UserState, RootState> = {
  [LOGIN]({ commit }, info: LoginParams) {
    return new Promise((resolve, reject) => {
      // call ajax
      postAccountLogin(info)
        .then(res => {
          commit(SET_TOKEN, res.token);
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  [GET_INFO]({ commit }) {
    return new Promise((resolve, reject) => {
      getCurrentUser()
        .then((res: UserInfo) => {
          commit(SET_INFO, res);
          resolve(res);
        })
        .catch(err => {
          // 获取登录用户信息后，直接清理掉当前 token 并强制让流程走到登录页
          commit(SET_TOKEN, null);
          reject(err);
        });
    });
  },
  // 从路由表构建路由（前端对比后端权限字段过滤静态路由表）
  [GENERATE_ROUTES]({ commit }, info: UserInfo) {
    return new Promise<RouteRecordRaw[]>(resolve => {
      // 修改这里可以进行接口返回的对象结构进行改变
      // 亦或是去掉 info.role 使用别的属性替代
      // 任何方案都可以，只需要将最后拼接构建好的路由数组使用
      // router.addRoute() 添加到当前运行时的路由中即可
      const { permissions } = (info.role || {}) as Role;
      const allRoutes = filterMenu(routes);
      const permissionsKey = permissions?.map(permission => permission.name);
      const allowRoutes = !permissionsKey
        ? allRoutes
        : allRoutes.filter(route => {
            // parnent route filter
            const hasAllow = hasAuthority(route as MenuDataItem, permissionsKey!);
            if (hasAllow && route.children && route.children.length > 0) {
              // current route children filter
              route.children = filterChildRoute(route as MenuDataItem, permissionsKey!);
            }
            return hasAllow;
          });
      console.log('allowRoutes', allowRoutes);
      // 添加到路由表
      const {
        // eslint-disable-next-line
        children: _,
        ...mainRoute
      } = routes[0];
      const route = {
        ...mainRoute,
        children: allowRoutes,
      };
      router.addRoute(route);
      commit(SET_ROUTERS, allowRoutes);
      resolve(allowRoutes);
    });
  },
  // 从后端获取路由表结构体，并构建前端路由
  [GENERATE_ROUTES_DYNAMIC]({ commit }) {
    return new Promise<RouteRecordRaw>(resolve => {
      generatorDynamicRouter()
        .then((routes: RouteRecordRaw) => {
          const allowRoutes = routes.children || [];
          // 添加到路由表
          router.addRoute(routes);
          commit(SET_ROUTERS, allowRoutes);
          resolve(routes);
        })
        .catch(err => {
          console.error('generatorDynamicRouter', err);
        });
    });
  },
  [LOGOUT]({ commit }) {
    return new Promise<void>(resolve => {
      postLogout().finally(() => {
        commit(SET_TOKEN, null);
        commit(RESET_CURRENT_USER);
        resolve();
      });
    });
  },
};
