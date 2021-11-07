const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");
const { baseTypes, userRolePermissionTypes } = require("../config/base");

const userRolePermissionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Role",
    },
    permission: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Permission",
    },
    type: {
      type: Number,
      enum: [userRolePermissionTypes.ROLE, userRolePermissionTypes.PERMISSION],
      default: userRolePermissionTypes.ROLE,
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
userRolePermissionSchema.plugin(toJSON);
userRolePermissionSchema.plugin(paginate);

userRolePermissionSchema.pre("save", async function (next) {
  const userRolePermission = this;
  if (
    userRolePermission.type === userRolePermissionTypes.ROLE &&
    !userRolePermission.role
  ) {
    throw new Error("When the 'type' is 'role', role must be not empty.");
  }

  if (
    userRolePermission.type === userRolePermissionTypes.PERMISSION &&
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
const UserRolePermission = mongoose.model(
  "UserRolePermission",
  userRolePermissionSchema
);

module.exports = UserRolePermission;
