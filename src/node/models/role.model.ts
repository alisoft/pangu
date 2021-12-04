import { model, Schema, SchemaTypes } from "mongoose";
import { paginate, toJSON } from "./plugins";
import { BaseTypes } from "../config/base";
import { RoleModel, RoleStaticMethod } from "@/node/types";

const roleSchema = new Schema<RoleModel, RoleStaticMethod>(
  {
    role: {
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
roleSchema.plugin(toJSON);
roleSchema.plugin(paginate);

/**
 * Check if role is taken
 * @param {string} role - The role
 * @param {ObjectId} [excludeRoleId] - The id of the role to be excluded
 * @returns {Promise<boolean>}
 */
roleSchema.static(
  "isRoleTaken",
  async function (role: string, excludeRoleId?: string) {
    const roleData = await this.findOne({
      role,
      isDel: BaseTypes.NORMAL,
      _id: { $ne: excludeRoleId },
    });
    return !!roleData;
  }
);

/**
 * @typedef Role
 */
export const Role = model<RoleModel, RoleStaticMethod>("Role", roleSchema);
