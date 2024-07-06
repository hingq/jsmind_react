export const randomString = () => {
  const len = 8;
  const str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var result = "";
  for (var i = len; i > 0; --i)
    result += str[Math.floor(Math.random() * str.length)];
  return result;
};
