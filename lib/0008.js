/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let xmax = Math.pow(2, 31);
  let n = parseInt(str, 10);
  if (Number.isNaN(n)) return 0;
  if (n < -xmax) return -xmax;
  if (n > xmax - 1) return xmax - 1;
  return n;
};

module.exports = {
  name: "8. 字符串转换整数 (atoi)",
  fn: myAtoi,
  usecases() {
    return [
      {
        args: ["42"],
        target: 42,
      },
      {
        args: ["   -42"],
        target: -42,
      },
      {
        args: ["4193 with words"],
        target: 4193,
      },
      {
        args: ["words and 987"],
        target: 0,
      },
      {
        args: ["-91283472332"],
        target: -2147483648,
      },
    ];
  },
};
