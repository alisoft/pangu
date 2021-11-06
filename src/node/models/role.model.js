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
 * @typedef Role
 */
const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
