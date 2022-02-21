var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const pairNum = target - num;
    if (map.has(pairNum)) {
      return [map.get(pairNum), i];
    }
    map.set(num, i);
  }
};

module.exports = {
  name: "1. 两数之和",
  fn: twoSum,
  usecases() {
    return [
      {
        args: [[2, 7, 11, 15], 9],
        target: [0, 1],
      },
      {
        args: [[1, 6142, 8192, 10239], 18431],
        target: [2, 3],
      },
    ];
  },
};
