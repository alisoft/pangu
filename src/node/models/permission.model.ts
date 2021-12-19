import { Schema, model, SchemaTypes } from "mongoose";
import { paginate, toJSON } from "./plugins";
import { BaseTypes } from "@/common/types/base";
import { PermissionModel, PermissionStaticMethod } from "@/common/types";

const permissionSchema = new Schema<PermissionModel, PermissionStaticMethod>(
  {
    permission: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
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
permissionSchema.plugin(toJSON);
permissionSchema.plugin(paginate);

/**
 * Check if permission is taken
 * @param {string} permission - The permission
 * @param {ObjectId} [excludePermissionId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
permissionSchema.static(
  "isPermissionTaken",
  async function (permission: string, excludePermissionId?: string) {
    const permissionData = await this.findOne({
      permission,
      isDel: BaseTypes.NORMAL,
      _id: { $ne: excludePermissionId },
    });
    return !!permissionData;
  }
);

/**
 * @typedef Permission
 */
export const Permission = model<PermissionModel, PermissionStaticMethod>(
  "Permission",
  permissionSchema
);
