import { Schema, model, SchemaTypes } from "mongoose";
import { paginate, toJSON } from "./plugins";
import { BaseTypes, UserRolePermissionTypes } from "../types/base";
import {
  UserRolePermissionModel,
  UserRolePermissionStaticMethod,
} from "../types";

const userRolePermissionSchema = new Schema<
  UserRolePermissionModel,
  UserRolePermissionStaticMethod
>(
  {
    user: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: SchemaTypes.ObjectId,
      ref: "Role",
    },
    permission: {
      type: SchemaTypes.ObjectId,
      ref: "Permission",
    },
    type: {
      type: Number,
      enum: [UserRolePermissionTypes.ROLE, UserRolePermissionTypes.PERMISSION],
      default: UserRolePermissionTypes.ROLE,
      required: true,
    },
    createBy: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    updateBy: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    isDel: {
      type: Number,
      enum: [BaseTypes.IS_DEL, BaseTypes.NORMAL],
      default: BaseTypes.NORMAL,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userRolePermissionSchema.plugin(toJSON);
userRolePermissionSchema.plugin(paginate);

userRolePermissionSchema.pre("save", async function (next) {
  const userRolePermission = this;
  if (
    userRolePermission.type === UserRolePermissionTypes.ROLE &&
    !userRolePermission.role
  ) {
    throw new Error("When the 'type' is 'role', role must be not empty.");
  }

  if (
    userRolePermission.type === UserRolePermissionTypes.PERMISSION &&
    !userRolePermission.permission
  ) {
    throw new Error(
      "When the 'type' is 'permission', permission must be not empty."
    );
  }
  next();
});

/**
 * @typedef UserRolePermission
 */
export const UserRolePermission = model<
  UserRolePermissionModel,
  UserRolePermissionStaticMethod
>("UserRolePermission", userRolePermissionSchema);
