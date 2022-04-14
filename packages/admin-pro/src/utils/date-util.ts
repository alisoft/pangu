import dayjs from 'dayjs';

export const dateFormat = (dataStr: string | number, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs(dataStr).format(pattern);
};

export const dateFormatNow = (dataStr: string | number) => {
  return dayjs(dataStr).fromNow();
};
