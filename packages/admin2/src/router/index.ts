import type { Component } from 'vue';
import { defineAsyncComponent, h } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import type { MenuDataItem } from './typing';
import Layout from '@/layouts/index.vue';
// import UserLayout from '@/layouts/user-layout.vue';
import UserLayout2 from '@/layouts/user-layout2.vue';
import RouteView from '@/layouts/route-view.vue';

const AsyncWorkplace = defineAsyncComponent(
  () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/workplace/index.vue'),
);
export const routes: MenuDataItem[] = [
  {
    name: 'index',
    path: '/',
    redirect: '/workplace',
    component: Layout,
    children: [
      {
        path: '/workplace',
        name: 'Workplace',
        meta: { icon: 'HistoryOutlined', title: 'pages.dashboard.workplace.title', lock: true },
        component: h(RouteView, null, () => h(AsyncWorkplace)),
      },
      // dashboard
      {
        name: 'Dashboard',
        path: '/dashboard',
        meta: { icon: 'HeartOutlined', title: 'pages.dashboard.title' },
        component: RouteView,
        redirect: '/dashboard/welcome',
        children: [
          {
            path: '/dashboard/welcome',
            name: 'welcome',
            meta: { icon: 'HistoryOutlined', title: 'pages.dashboard.welcome.title' },
            component: (): Component =>
              import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/workplace2/index.vue'),
          },
          {
            path: '/dashboard/analysis',
            name: 'Analysis',
            meta: { icon: 'HeartOutlined', title: 'pages.dashboard.analysis.title' },
            component: (): Component =>
              import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/analysis/index.vue'),
          },
          {
            path: '/dashboard/monitor',
            name: 'Monitor',
            meta: { icon: 'HeartOutlined', title: 'pages.dashboard.monitor.title' },
            component: (): Component =>
              import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/monitor/index.vue'),
          },
        ],
      },

      // form
      {
        path: '/form',
        name: 'form',
        meta: { title: 'pages.form.title', icon: 'FormOutlined', authority: 'form' },
        component: RouteView,
        redirect: '/form/basic-form',
        children: [
          {
            path: '/form/basic-form',
            name: 'basic-form',
            meta: { title: 'form.basicform.basic.title', keepAlive: true },
            component: (): Component =>
              import(/* webpackChunkName: "form" */ '@/views/form/basic-form/index.vue'),
          },
          {
            path: '/form/step-form',
            name: 'step-form',
            meta: { title: 'form.stepform.basic.title' },
            component: (): Component =>
              import(/* webpackChunkName: "form" */ '@/views/form/step-form/index.vue'),
          },
          {
            path: '/form/advanced-form',
            name: 'advanced-form',
            meta: { title: 'form.advancedform.basic.title' },
            component: (): Component =>
              import(/* webpackChunkName: "form" */ '@/views/form/advance-form/index.vue'),
          },
        ],
      },

      // list
      {
        path: '/list',
        name: 'list',
        meta: { title: 'pages.list.title', icon: 'TableOutlined' },
        component: RouteView,
        redirect: '/list/table-list',
        children: [
          {
            path: '/list/table-list',
            name: 'table-list',
            meta: { title: 'pages.list.tablelist.title' },
            component: (): Component =>
              import(/* webpackChunkName: "list" */ '@/views/list/table-list/index.vue'),
          },
          {
            path: '/list/basic-list',
            name: 'basic-list',
            meta: { title: 'pages.list.basiclist.title' },
            component: (): Component =>
              import(/* webpackChunkName: "list" */ '@/views/list/basic-list/index.vue'),
          },
          {
            path: '/list/card-list',
            name: 'card-list',
            meta: { title: 'pages.list.cardlist.title' },
            component: (): Component =>
              import(/* webpackChunkName: "list" */ '@/views/list/card-list/index.vue'),
          },
        ],
      },

      // profile
      {
        path: '/profile',
        name: 'profile',
        meta: { title: 'pages.profile.title', icon: 'UnorderedListOutlined' },
        component: RouteView,
        redirect: '/profile/basic',
        children: [
          {
            path: '/profile/basic',
            name: 'profile-basic',
            meta: {
              title: 'pages.profile.basic.title',
              // collapsedIcon: 'UnorderedListOutlined',
            },
            component: () =>
              import(/* webpackChunkName: "profile" */ '@/views/profile/basic/index.vue'),
          },
          {
            path: '/profile/advanced',
            name: 'profile-advanced',
            meta: {
              title: 'pages.profile.advanced.title',
              // collapsedIcon: 'UnorderedListOutlined',
            },
            component: () =>
              import(/* webpackChunkName: "profile" */ '@/views/profile/advanced/index.vue'),
          },
        ],
      },

      // exception
      {
        name: 'exception',
        path: '/exception',
        meta: { title: 'pages.exception.title', icon: 'WarningOutlined' },
        component: RouteView,
        redirect: '/exception/403',
        children: [
          {
            name: 'exception403',
            path: '/exception/403',
            meta: { title: 'pages.exception.403.title' },
            component: () =>
              import(/* webpackChunkName: "exception" */ '@/views/exception/403.vue'),
          },
          {
            name: 'exception404',
            path: '/exception/404',
            meta: { title: 'pages.exception.404.title' },
            component: () =>
              import(/* webpackChunkName: "exception" */ '@/views/exception/404.vue'),
          },
          {
            name: 'exception500',
            path: '/exception/500',
            meta: { title: 'pages.exception.500.title' },
            component: () =>
              import(/* webpackChunkName: "exception" */ '@/views/exception/500.vue'),
          },
        ],
      },

      // result
      {
        name: 'result',
        path: '/result',
        meta: { title: 'pages.result.title', icon: 'CheckCircleOutlined' },
        component: RouteView,
        redirect: '/result/success',
        children: [
          {
            name: 'result-success',
            path: '/result/success',
            meta: { title: 'pages.result.success.title' },
            component: () => import(/* webpackChunkName: "result" */ '@/views/result/success.vue'),
          },
          {
            name: 'result-fail',
            path: '/result/fail',
            meta: { title: 'pages.result.fail.title' },
            component: () => import(/* webpackChunkName: "result" */ '@/views/result/fail.vue'),
          },
        ],
      },

      {
        name: 'account',
        path: '/account',
        meta: { title: 'pages.account.title', icon: 'AppstoreAddOutlined' },
        component: RouteView,
        redirect: '/account/center',
        children: [
          {
            name: 'AccountCenter',
            path: '/account/center',
            meta: { title: 'pages.account.center.title' },
            component: () =>
              import(/* webpackChunkName: "account" */ '@/views/account/center/index.vue'),
          },
          {
            name: 'AccountSettings',
            path: '/account/settings',
            meta: {
              title: 'pages.account.settings.title',
              hideChildrenInMenu: true,
              mergeTab: true,
            },
            redirect: '/account/settings/base',
            component: () =>
              import(/* webpackChunkName: "account" */ '@/views/account/settings/index.vue'),
            children: [
              {
                name: 'BaseSettings',
                path: '/account/settings/base',
                meta: { title: 'pages.account.settings.base.title' },
                component: () =>
                  import(
                    /* webpackChunkName: "account" */ '@/views/account/settings/pages/base.vue'
                  ),
              },
              {
                name: 'SecuritySettings',
                path: '/account/settings/security',
                meta: { title: 'pages.account.settings.security.title' },
                component: () =>
                  import(
                    /* webpackChunkName: "account" */ '@/views/account/settings/pages/security.vue'
                  ),
              },
              {
                name: 'CustomSettings',
                path: '/account/settings/custom',
                meta: { title: 'pages.account.settings.custom.title' },
                component: () =>
                  import(
                    /* webpackChunkName: "account" */ '@/views/account/settings/pages/custom.vue'
                  ),
              },
              {
                name: 'BindingSettings',
                path: '/account/settings/binding',
                meta: { title: 'pages.account.settings.binding.title' },
                component: () =>
                  import(
                    /* webpackChunkName: "account" */ '@/views/account/settings/pages/binding.vue'
                  ),
              },
              {
                name: 'NotificationSettings',
                path: '/account/settings/notification',
                meta: { title: 'pages.account.settings.notification.title' },
                component: () =>
                  import(
                    /* webpackChunkName: "account" */ '@/views/account/settings/pages/notification.vue'
                  ),
              },
            ],
          },
        ],
      },

      // system
      {
        path: '/system',
        name: 'system',
        meta: { title: 'pages.system.title', icon: 'TableOutlined' },
        component: RouteView,
        redirect: '/system/role-list',
        children: [
          {
            path: '/system/role-list',
            name: 'role-list',
            meta: { title: 'pages.system.role-list.title' },
            component: (): Component =>
              import(/* webpackChunkName: "system" */ '@/views/system/role-list.vue'),
          },
          {
            path: '/system/permission-list',
            name: 'permission-list',
            meta: { title: 'pages.system.permission-list.title' },
            component: (): Component =>
              import(/* webpackChunkName: "system" */ '@/views/system/permission-list.vue'),
          },
        ],
      },

      // jump url
      {
        path: '/jump-url',
        name: 'jumpUrl',
        meta: { title: 'pages.jumpUrl.title', icon: 'LinkOutlined' },
        component: RouteView,
        redirect: '/jump-url/router',
        children: [
          {
            path: '/jump-url/router',
            name: 'jumpUrlExamples',
            meta: { title: 'pages.jumpUrl.router.title' },
            component: (): Component =>
              import(/* webpackChunkName: "jumpUrl" */ '@/views/examples/jump-url/index.vue'),
          },
          {
            path: 'https://github.com/vueComponent/ant-design-vue',
            name: 'github',
            meta: {
              title: 'pages.jumpUrl.github.title',
              target: '_blank',
            },
            component: () => null,
          },
        ],
      },

      // examples
      {
        name: 'examples',
        path: '/examples',
        meta: { title: 'pages.examples.title', icon: 'AppstoreAddOutlined' },
        component: RouteView,
        redirect: '/examples/button',
        children: [
          {
            name: 'SurelyVueExample',
            path: '/examples/surely-vue',
            meta: {
              title: 'pages.examples.surely-vue.title',
              // collapsedIcon: 'AppstoreAddOutlined',
            },
            component: () =>
              import(/* webpackChunkName: "examples" */ '@/views/examples/surely-vue/index.vue'),
          },
          {
            name: 'ButtonExample',
            path: '/examples/button',
            meta: {
              title: 'pages.examples.button.title',
              // collapsedIcon: 'AppstoreAddOutlined',
            },
            component: () =>
              import(/* webpackChunkName: "examples" */ '@/views/examples/button/index.vue'),
          },
          {
            name: 'InputExample',
            path: '/examples/input',
            meta: {
              title: 'pages.examples.input.title',
              // collapsedIcon: 'AppstoreAddOutlined',
            },
            component: () =>
              import(/* webpackChunkName: "examples" */ '@/views/examples/input/index.vue'),
          },
          {
            name: 'RateExample',
            path: '/examples/rate',
            meta: {
              title: 'pages.examples.rate.title',
              // collapsedIcon: 'AppstoreAddOutlined',
            },
            component: () =>
              import(/* webpackChunkName: "examples" */ '@/views/examples/rate/index.vue'),
          },
          {
            name: 'PermissionExample',
            path: '/examples/permission',
            meta: {
              title: 'pages.examples.authority.title',
              // collapsedIcon: 'AppstoreAddOutlined',
            },
            component: () =>
              import(/* webpackChunkName: "examples" */ '@/views/examples/authority/index.vue'),
          },
        ],
      },

      {
        name: 'nested',
        path: '/nested',
        meta: { title: 'pages.nested.title', icon: 'AppstoreAddOutlined' },
        component: RouteView,
        redirect: '/nested/menu1',
        children: [
          {
            name: 'nested-menu1',
            path: '/nested/menu1',
            // 由于 vuerouter 问题，三级路由开启 keepalive 会导致组件多次 setup
            meta: { title: 'pages.nested.menu1.title', keepAlive: false },
            component: () =>
              import(/* webpackChunkName: "nested" */ '@/views/examples/nested/menu1.vue'),
            redirect: '/nested/menu1/menu1-1',
            children: [
              {
                name: 'nested-menu1-1',
                path: '/nested/menu1/menu1-1',
                meta: { title: 'pages.nested.menu1-1.title', authority: 'nested-menu1' },
                component: () =>
                  import(/* webpackChunkName: "nested" */ '@/views/examples/nested/menu1-1.vue'),
              },
              {
                name: 'nested-menu1-2',
                path: '/nested/menu1/menu1-2',
                meta: { title: 'pages.nested.menu1-2.title', keepAlive: false },
                redirect: '/nested/menu1/menu1-2/menu1-2-1',
                component: () =>
                  import(/* webpackChunkName: "nested" */ '@/views/examples/nested/menu1-2.vue'),
                children: [
                  {
                    name: 'nested-menu1-2-1',
                    path: '/nested/menu1/menu1-2/menu1-2-1',
                    meta: { title: 'pages.nested.menu1-2-1.title' },
                    component: () =>
                      import(
                        /* webpackChunkName: "nested" */ '@/views/examples/nested/menu1-2-1.vue'
                      ),
                  },
                ],
              },
            ],
          },
          {
            name: 'nested-menu2',
            path: '/nested/menu2',
            meta: { title: 'pages.nested.menu2.title' },
            component: () =>
              import(/* webpackChunkName: "nested" */ '@/views/examples/nested/menu2.vue'),
          },
          {
            name: 'nested-menu3',
            path: '/nested/menu3',
            meta: { title: 'pages.nested.menu3.title', hideChildrenInMenu: true, keepAlive: false },
            redirect: '/nested/menu3/menu3-1',
            component: () =>
              import(/* webpackChunkName: "nested" */ '@/views/examples/nested/menu3.vue'),
            children: [
              {
                name: 'nested-menu3-1',
                path: '/nested/menu3/menu3-1',
                meta: { title: 'pages.nested.menu3-1.title' },
                component: () =>
                  import(/* webpackChunkName: "nested" */ '@/views/examples/nested/menu3-1.vue'),
              },
            ],
          },
        ],
      },
    ],
  },
];

export const staticRoutes: MenuDataItem[] = [
  {
    path: '/test',
    name: 'test',
    meta: { title: 'form.basicform.basic.title' },
    component: (): Component =>
      import(/* webpackChunkName: "other" */ '@/views/form/basic-form/index.vue'),
  },
  {
    path: '/user',
    name: 'user',
    meta: { hideInMenu: true, title: 'pages.layouts.userLayout.title' },
    component: UserLayout2,
    children: [
      {
        path: '/user/login',
        name: 'login',
        meta: { title: 'pages.login.accountLogin.tab' },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/login.vue'),
      },
      {
        path: '/user/register',
        name: 'register',
        meta: { title: 'pages.login.registerAccount' },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/register.vue'),
      },
      {
        path: '/user/register-result',
        name: 'register-result',
        meta: { title: 'pages.login.registerAccount' },
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/register-result.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import(/* webpackChunkName: "exception" */ '@/views/exception/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_PUBLIC_PATH),
  routes: staticRoutes,
});

export default router;
