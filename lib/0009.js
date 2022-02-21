/**
 * 进阶:
 * 你能不将整数转为字符串来解决这个问题吗？
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  let arr = [];
  while (x > 0) {
    arr.push(x % 10);
    x = ~~(x / 10);
  }
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (arr[i] !== arr[j]) return false;
  }
  return true;
};

module.exports = {
  name: "9. 回文数",
  fn: isPalindrome,
  usecases() {
    return [
      {
        args: [121],
        target: true,
      },
      {
        args: [-121],
        target: false,
      },
      {
        args: [10],
        target: false,
      },
    ];
  },
};
