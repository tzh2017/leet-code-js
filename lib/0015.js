/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum == 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] == nums[left - 1]) left++;
        while (left < right && nums[right] == nums[right + 1]) right--;
      } else if (sum > 0) {
        right--;
        while (left < right && nums[right] == nums[right + 1]) right--;
      } else {
        left++;
        while (left < right && nums[left] == nums[left - 1]) left++;
      }
    }
  }
  return result;
};

module.exports = {
  name: "15. 三数之和",
  fn: threeSum,
  usecases() {
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
      {
        args: [[-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]],
        target: [
          [-4, -2, 6],
          [-4, 0, 4],
          [-4, 1, 3],
          [-4, 2, 2],
          [-2, -2, 4],
          [-2, 0, 2],
        ],
      },
    ];
  },
};
