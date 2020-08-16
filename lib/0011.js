/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let w = j - i;
      let h = Math.min(height[i], height[j]);
      let size = w * h;
      if (size > max) max = size;
    }
  }
  return max;
};

module.exports = {
  name: "11. 盛最多水的容器",
  fn: maxArea,
  params() {
    return [
      {
        args: [[1, 8, 6, 2, 5, 4, 8, 3, 7]],
        target: 49,
      },
    ];
  },
};
