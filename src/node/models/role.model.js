const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");
const { baseTypes } = require("../config/base");

const roleSchema = mongoose.Schema(
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
roleSchema.plugin(toJSON);
roleSchema.plugin(paginate);

/**
 * Check if role is taken
 * @param {string} role - The role
 * @param {ObjectId} [excludeRoleId] - The id of the role to be excluded
 * @returns {Promise<boolean>}
 */
roleSchema.statics.isRoleTaken = async function (role, excludeRoleId) {
  const roleData = await this.findOne({
    role,
    isDel: baseTypes.NORMAL,
    _id: { $ne: excludeRoleId },
  });
  return !!roleData;
};

/**
 * @typedef Role
 */
const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
