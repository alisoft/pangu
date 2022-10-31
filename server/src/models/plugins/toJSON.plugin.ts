import { Schema } from "mongoose";

/**
 * A mongoose schema plugin which applies the following in the toJSON transform call:
 *  - removes __v, createdAt, updatedAt, and any path that has private: true
 *  - replaces _id with id
 */

const deleteAtPath = (obj: any, path: string, index: number) => {
  if (index === path.length - 1) {
    delete obj[path[index]];
    return;
  }
  deleteAtPath(obj[path[index]], path, index + 1);
};

export const toJSON = (schema: Schema<any>) => {
  let transform: any;
  // @ts-ignore
  if (schema.options.toJSON && schema.options.toJSON.transform) {
    // @ts-ignore
    transform = schema.options.toJSON.transform;
  }

  // @ts-ignore
  schema.options.toJSON = Object.assign(schema.options.toJSON || {}, {
    // @ts-ignore
    transform(doc, ret, options) {
      Object.keys(schema.paths).forEach((path) => {
        // @ts-ignore
        if (schema.paths[path].options && schema.paths[path].options.private) {
          // @ts-ignore
          deleteAtPath(ret, path.split("."), 0);
        }
      });

      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      delete ret.createdAt;
      delete ret.createBy;
      delete ret.updatedAt;
      delete ret.updateBy;
      if (transform) {
        return transform(doc, ret, options);
      }
    },
  });
};
