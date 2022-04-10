import router from '@/router';
import store from '@/store';
import localStorage from '@/utils/local-storage';
import { allowList, loginRoutePath } from '../define-meta';
import { STORAGE_TOKEN_KEY } from '@/store/mutation-type';
// eslint-disable-next-line
import { GENERATE_ROUTES, GET_INFO } from '@/store/modules/user/actions';

router.beforeEach(async to => {
  const userToken = localStorage.get(STORAGE_TOKEN_KEY);
  // token check
  if (!userToken) {
    // 白名单路由列表检查
    if (allowList.includes(to.name as string)) {
      return true;
    }
    if (to.fullPath !== loginRoutePath) {
      // 未登录，进入到登录页
      return {
        path: loginRoutePath,
        replace: true,
        // 登录后跳转到之前页面，如不需要，直接删除 query 即可
        query: { redirect: encodeURIComponent(to.fullPath) },
      };
    }
    return to;
  }

  // check login user.role is null
  if (store.getters['user/allowRouters'] && store.getters['user/allowRouters'].length > 0) {
    return true;
  } else {
    // 从服务端获取用户的 [基础信息] 和 [权限信息]
    // 并构建动态路由和菜单
    // 问题1：为什么这么做：
    //   - 一般开发需要权限的系统时，都会有 登录 步骤
    //   - SPA 单页应用每次刷新时，内存中的数据都会被清空，如果每次刷新，执行一次 登录 步骤则非常不合理。
    //   - 所以设计为，一次登录，获得用户的授权 access token，并持久化到 localstorage，之后用户每次打开
    //     页面或者刷新页面时，都利用这个 token 去向后端索要用户的真实信息
    // 问题2：为什么不把用户信息也存到 localstorage 来少一次请求？
    //   - 用户信息存在 localstorage 后，使用者打开控制台，直接修改其中的权限信息，如：
    //     我的用户角色是 'user' ，这时改成 'admin'。刷新页面时就能看到 'admin' 才能看到的信息。所以该方案不可行！
    // 问题3：为什么不每次都调用登录？
    //   - 如果每次刷新都进行登录认证，那么用户的账户以及密码则不可保障安全
    //   - 要登录必然要账户密码或相同功能的认证信息代替
    // 问题4：access token 不是也不能保障安全吗？
    //   - 用户在此进行登录，代表认同该设备。保存用户的 token 可以进行快速身份认证，
    //     并且当用户认为 token 发生泄露或不安全时，可以根据相关服务端 token 设计规则，让 token 失效。
    const info = await store.dispatch(`user/${GET_INFO}`);
    // 使用当前用户的 权限信息 生成 对应权限的路由表
    const allowRouters = await store.dispatch(`user/${GENERATE_ROUTES}`, info);
    if (allowRouters) {
      return { ...to, replace: true };
    }
    return false;
  }
});

router.afterEach(() => {});
