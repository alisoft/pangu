// import { Permission } from '@/store/modules/user/typing';
import type { MenuDataItem } from '@/router/typing';
import type { Action, Role } from '@/store/modules/user/typing';
import type { Ref } from 'vue';
import { unref, computed, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import intersection from 'lodash.intersection';
import toArray from 'lodash.toarray';
import { useRoute } from 'vue-router';

export const filterChildRoute = (route: MenuDataItem, permissions: string[]) =>
  route.children
    ?.filter(item => {
      const hasAllow = hasAuthority(item, permissions);
      if (hasAllow && item.children && item.children.length > 0) {
        item.children = filterChildRoute(item, permissions!);
      }
      return hasAllow;
    })
    .filter(item => item);

// permissions: Permission[]
export const hasAuthority = (route: MenuDataItem, permissions: string[]) => {
  if (route.meta?.authority) {
    return permissions.some(value => {
      return route.meta?.authority?.includes(value);
    });
  }
  return true;
};

type MaybeRef<T> = T | Ref<T>;
export const useAuth = (actions: MaybeRef<Action | Action[]>) => {
  const store = useStore();
  const role = computed<Role>(() => store.getters['user/role']);
  const hasAuth = ref(false);
  const route = useRoute();
  watchEffect(() => {
    const authority =
      typeof route.meta.authority === 'string'
        ? [route.meta.authority]
        : (route.meta.authority as string[]) || [];
    const permissions = role.value?.permissions;
    const auths = toArray(unref(actions));
    if (permissions) {
      hasAuth.value = false;
      for (let i = 0; i < permissions.length; i++) {
        const p = permissions[i];
        if (!authority.includes(p.name)) continue;
        // 都是空的时候，算作有权限
        if ((p.actions && p.actions.length === 0 && auths.length === 0) || auths.length === 0) {
          hasAuth.value = true;
          break;
        }
        if (intersection(p.actions || [], auths).length) {
          hasAuth.value = true;
          break;
        }
      }
    } else {
      hasAuth.value = true;
    }
  });
  return hasAuth;
};
