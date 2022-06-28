import { model, Schema, SchemaTypes } from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";
import { toJSON, paginate } from "./plugins";
import { RoleTypes } from "../types/roles";
import { BaseTypes } from "../types/base";
import { UserModel, UserStaticMethod } from "../types";

const userSchema = new Schema<UserModel, UserStaticMethod>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value: string) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      validate(value: string) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error(
            "Password must contain at least one letter and one number"
          );
        }
      },
      private: true, // used by the toJSON plugin
    },
    role: {
      type: String,
      enum: RoleTypes,
      default: "user",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
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
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.static(
  "isEmailTaken",
  async function (email: string, excludeUserId?: string) {
    const user = await this.findOne({
      email,
      isDel: BaseTypes.NORMAL,
      _id: { $ne: excludeUserId },
    });
    return !!user;
  }
);

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.method("isPasswordMatch", async function (password: string) {
  const user = this;
  return bcrypt.compare(password, user.password!);
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.id) {
    user.createBy = user.id;
    user.updateBy = user.id;
  }
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password!, 8);
  }
  next();
});

/**
 * @typedef User
 */
export const User = model<UserModel, UserStaticMethod>("User", userSchema);
