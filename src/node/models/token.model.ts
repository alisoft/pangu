import { Schema, model, SchemaTypes } from "mongoose";
import { toJSON } from "./plugins";
import { tokenTypes } from "../config/tokens";
import { TokenModel } from "@/node/types";

const tokenSchema = new Schema<TokenModel>(
  {
    token: {
      type: String,
      required: true,
      index: true,
    },
    user: {
      type: SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: [
        tokenTypes.REFRESH,
        tokenTypes.RESET_PASSWORD,
        tokenTypes.VERIFY_EMAIL,
      ],
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    blacklisted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
tokenSchema.plugin(toJSON);

/**
 * @typedef Token
 */
export const Token = model<TokenModel>("Token", tokenSchema);
