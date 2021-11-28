import moment from "moment";

export const dateFormat = (
  dataStr: string | number,
  pattern = "YYYY-MM-DD HH:mm:ss"
) => {
  return moment(dataStr).format(pattern);
};

export const dateFormatNow = (dataStr: string | number) => {
  return moment(dataStr).fromNow();
};
