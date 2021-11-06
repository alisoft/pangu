const mongoose = require("mongoose");
const { toJSON } = require("./plugins");
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
    create_by: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    create_date: {
      type: Date,
      required: true,
    },
    update_by: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    update_date: {
      type: Date,
      required: true,
    },
    is_del: {
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

/**
 * @typedef RolePermission
 */
const RolePermission = mongoose.model("RolePermission", rolePermissionSchema);

module.exports = RolePermission;
