/**
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    if (obj.hasOwnProperty(e)) {
      return [obj[e], i];
    }
    obj[target - e] = i;
  }
};

module.exports = {
  name: "1. 两数之和",
  fn: twoSum,
  params() {
    return [
      {
        args: [[2, 7, 11, 15], 9],
        target: [0, 1],
      },
    ];
  },
};
