export enum Action {
  ADD = 'add',
  DELETE = 'delete',
  UPDATE = 'update',
  QUERY = 'query',
  IMPORT = 'import',
  EXPORT = 'export',
}

export interface Permission {
  /* 权限ID */
  id: string | number;
  /* 权限归属的角色 */
  roleId?: string | number;
  /* 权限名称 */
  name: string;
  /* 权限显示的名字 */
  label?: string;
  /* 权限拥有的操作 [增,删,改,查] */
  actions?: Action[];
}

export interface Role {
  /* 角色ID */
  id: string | number;
  /* 角色名称 */
  name: string;
  /* 角色描述 */
  describe: string;
  /* 角色绑定的权限 */
  permissions?: Permission[];
}

export interface UserState {
  token?: string;
  username: string;
  nickname: string;
  avatar: string;
  role?: Role;
  allowRouters: [];
  extra: {
    [key: string]: any;
  };
  [key: string]: any;
}
