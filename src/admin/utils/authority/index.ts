// import { Permission } from '@/admin/store/modules/user/typing';
import type { MenuDataItem } from "../../router/typing";

export const filterChildRoute = (route: MenuDataItem, permissions: string[]) =>
  route.children
    ?.filter((item) => {
      const hasAllow = hasAuthority(item, permissions);
      if (hasAllow && item.children && item.children.length > 0) {
        item.children = filterChildRoute(item, permissions!);
      }
      return hasAllow;
    })
    .filter((item) => item);

// permissions: Permission[]
export const hasAuthority = (route: MenuDataItem, permissions: string[]) => {
  if (route.meta?.authority) {
    return permissions.some((value) => {
      return route.meta?.authority?.includes(value);
    });
  }
  return true;
};
