/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let states = {};
  for (const e of nums) states[e] = {};

  let arr = [];
  let len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    const ni = nums[i];
    for (let j = i + 1; j < len - 1; j++) {
      const nj = nums[j];
      for (let k = j + 1; k < len; k++) {
        const nk = nums[k];
        if (ni + nj + nk == 0) {
          if (states[ni][nj] == null) {
            states[ni][nj] = nk;
            arr.push([ni, nj, nk]);
          }
        }
      }
    }
  }
  return arr;
};

module.exports = {
  name: "15. 三数之和",
  fn: threeSum,
  params() {
    return [
      {
        args: [[-1, 0, 1, 2, -1, -4]],
        target: [
          [-1, -1, 2],
          [-1, 0, 1],
        ],
      },
      {
        args: [[0, 0, 0, 0]],
        target: [[0, 0, 0]],
      },
    ];
  },
};
