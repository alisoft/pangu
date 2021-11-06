const mongoose = require("mongoose");
const { toJSON } = require("./plugins");
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
roleSchema.plugin(toJSON);

/**
 * Check if role is taken
 * @param {string} role - The role
 * @param {ObjectId} [excludeRoleId] - The id of the role to be excluded
 * @returns {Promise<boolean>}
 */
roleSchema.statics.isRoleTaken = async function (role, excludeRoleId) {
  const roleData = await this.findOne({
    role,
    is_del: baseTypes.NORMAL,
    _id: { $ne: excludeRoleId },
  });
  return !!roleData;
};

/**
 * @typedef Role
 */
const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
