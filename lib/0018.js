/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  // 排序
  nums.sort((a, b) => a - b);
  // 两两相加
  let obj = {};
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (obj.hasOwnProperty(sum)) obj[sum].push([nums[i], nums[j]]);
      else obj[sum] = [[nums[i], nums[j]]];
      // if (obj.hasOwnProperty(sum)) obj[sum].push([i, j]);
      // else obj[sum] = [[i, j]];
    }
  }
  // 计算所有可能性
  const result = [];
  const sums = Object.keys(obj).sort((a, b) => a - b);
  for (let left = 0, right = sums.length - 1; left < right; ) {
    const sumAll = ~~sums[left] + ~~sums[right];
    console.log(`${sumAll}   ${sums[left]} ${sums[right]}`);
    if (sumAll == 0) {
      const leftArr = obj[sums[left]];
      const rightArr = obj[sums[right]];
      for (const arr of leftArr) {
        for (const arr2 of rightArr) {
          result.push([...arr, ...arr2]);
        }
      }
      // for (const [i, j] of leftArr) {
      //   for (const [i2, j2] of rightArr) {
      //     result.push([nums[i], nums[j], nums[i2], nums[j2]]);
      //   }
      // }
      left++;
      right--;
    } else if (sumAll < 0) {
      left++;
    } else if (sumAll > 0) {
      right--;
    }
  }
  console.log(result);
  return result;
};

module.exports = {
  name: "18. 四数之和",
  ignore: true,
  fn: fourSum,
  params() {
    return [
      {
        args: [[1, 0, -1, 0, -2, 2], 0],
        target: [
          [-1, 0, 0, 1],
          [-2, -1, 1, 2],
          [-2, 0, 0, 2],
        ],
      },
    ];
  },
};
