const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");
const { baseTypes } = require("../config/base");

const rolePermissionSchema = mongoose.Schema(
  {
    role: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Role",
      required: true,
    },
    permission: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Permission",
      required: true,
    },
    createBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    updateBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    isDel: {
      type: Number,
      enum: [baseTypes.IS_DEL, baseTypes.NORMAL],
      default: baseTypes.NORMAL,
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
const RolePermission = mongoose.model("RolePermission", rolePermissionSchema);

module.exports = RolePermission;
