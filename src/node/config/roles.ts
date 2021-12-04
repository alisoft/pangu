export enum RoleTypes {
  user = "user",
  admin = "admin",
}

export const allRoles: Record<RoleTypes, string[]> = {
  user: [],
  admin: ["getUsers", "manageUsers"],
};
