const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");
const { baseTypes } = require("../config/base");

const permissionSchema = mongoose.Schema(
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
permissionSchema.plugin(toJSON);
permissionSchema.plugin(paginate);

/**
 * Check if permission is taken
 * @param {string} permission - The permission
 * @param {ObjectId} [excludePermissionId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
permissionSchema.statics.isPermissionTaken = async function (
  permission,
  excludePermissionId
) {
  const permissionData = await this.findOne({
    permission,
    isDel: baseTypes.NORMAL,
    _id: { $ne: excludePermissionId },
  });
  return !!permissionData;
};

/**
 * @typedef Permission
 */
const Permission = mongoose.model("Permission", permissionSchema);

module.exports = Permission;
