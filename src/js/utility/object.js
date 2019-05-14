export const copyObject = obj => {
  let result = obj;
  if (typeof obj === typeof {}) result = JSON.parse(JSON.stringify(obj));
  return result;
};
