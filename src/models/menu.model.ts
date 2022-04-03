import { model, Schema, SchemaTypes } from "mongoose";
import { toJSON, paginate } from "./plugins";
import { BaseTypes, TargetTypes } from "@/types/base";
import { MenuModel, MenuStaticMethod } from "@/types";

const menuSchema = new Schema<MenuModel, MenuStaticMethod>(
  {
    path: {
      type: String,
      required: true,
      trim: true,
    },
    component: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    redirect: {
      type: String,
      trim: true,
    },
    title: {
      type: String,
      trim: true,
    },
    icon: {
      type: String,
      trim: true,
    },
    lock: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      enum: [TargetTypes.BLANK, TargetTypes.SELF],
      default: TargetTypes.BLANK,
    },
    hideInMenu: {
      type: Boolean,
      default: false,
    },
    hideChildrenInMenu: {
      type: Boolean,
      default: false,
    },
    parent: {
      type: SchemaTypes.ObjectId,
      ref: "Menu",
    },
    createBy: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      // required: true,
    },
    updateBy: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      // required: true,
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
menuSchema.plugin(toJSON);
menuSchema.plugin(paginate);

/**
 * @typedef Menu
 */
export const Menu = model<MenuModel, MenuStaticMethod>("Menu", menuSchema);
