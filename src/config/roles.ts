import { RoleTypes } from "@/types/roles";

export const allRoles: Record<RoleTypes, string[]> = {
  user: [],
  admin: ["getUsers", "manageUsers"],
};
