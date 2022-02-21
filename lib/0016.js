/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let closestSum = 1000000;
  let closestDiff = 1000000;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let diff = Math.abs(sum - target);
      if (diff < closestDiff) {
        closestSum = sum;
        closestDiff = diff;
      }
      if (sum == target) {
        return sum;
      } else if (sum > target) {
        right--;
        while (left < right && nums[right] == nums[right + 1]) right--;
      } else {
        left++;
        while (left < right && nums[left] == nums[left - 1]) left++;
      }
    }
  }
  return closestSum;
};

module.exports = {
  name: "16. 最接近的三数之和",
  fn: threeSumClosest,
  usecases() {
    return [
      {
        args: [[-1, 2, 1, -4], 1],
        target: 2,
      },
      {
        args: [[0, 2, 1, -3], 1],
        target: 0,
      },
    ];
  },
};
