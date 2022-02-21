/**
 * https://leetcode-cn.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;
  nums.forEach((e) => (result ^= e));
  return result;
};

module.exports = {
  name: "136. 只出现一次的数字",
  fn: singleNumber,
  usecases() {
    return [
      {
        args: [[2, 2, 1]],
        target: 1,
      },
      {
        args: [[4, 1, 2, 1, 2]],
        target: 4,
      },
    ];
  },
};
