import { Schema, model, SchemaTypes } from "mongoose";
import { paginate, toJSON } from "./plugins";
import { BaseTypes } from "@/common/types/base";
import {
  RolePermissionModel,
  RolePermissionStaticMethod,
} from "@/common/types";

const rolePermissionSchema = new Schema<
  RolePermissionModel,
  RolePermissionStaticMethod
>(
  {
    role: {
      type: SchemaTypes.ObjectId,
      ref: "Role",
      required: true,
    },
    permission: {
      type: SchemaTypes.ObjectId,
      ref: "Permission",
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
rolePermissionSchema.plugin(toJSON);
rolePermissionSchema.plugin(paginate);

/**
 * @typedef RolePermission
 */
export const RolePermission = model<
  RolePermissionModel,
  RolePermissionStaticMethod
>("RolePermission", rolePermissionSchema);
