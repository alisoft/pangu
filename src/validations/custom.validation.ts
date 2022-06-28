import { CustomHelpers } from "joi";

export const objectId = (value: string, helpers: CustomHelpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    // @ts-ignore
    return helpers.message('"{{#label}}" must be a valid mongo id');
  }
  return value;
};

export const password = (value: string, helpers: CustomHelpers) => {
  if (value.length < 8) {
    // @ts-ignore
    return helpers.message("password must be at least 8 characters");
  }
  if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    return helpers.message(
      // @ts-ignore
      "password must contain at least 1 letter and 1 number"
    );
  }
  return value;
};
