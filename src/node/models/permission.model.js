const mongoose = require("mongoose");
const { toJSON } = require("./plugins");
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
permissionSchema.plugin(toJSON);

/**
 * @typedef Permission
 */
const Permission = mongoose.model("Permission", permissionSchema);

module.exports = Permission;
