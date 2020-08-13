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
  desc: "136 Single Number",
  fn: singleNumber,
  params() {
    return [
      [[2, 2, 1], 1],
      [[4, 1, 2, 1, 2], 4],
    ];
  },
};
