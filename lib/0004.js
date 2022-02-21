/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let count = nums1.length + nums2.length;
  let mid = ~~((count - 1) / 2);
  let i = 0;
  let j = 0;
  while (i + j < mid) {
    if (i < nums1.length && j < nums2.length) {
      if (nums1[i] <= nums2[j]) i++;
      else j++;
    } else if (i < nums1.length) {
      i++;
    } else if (j < nums2.length) {
      j++;
    }
  }
  let mids = [];
  let midCount = count % 2 == 0 ? 2 : 1;
  while (midCount--) {
    if (i < nums1.length && j < nums2.length) {
      if (nums1[i] <= nums2[j]) {
        mids.push(nums1[i++]);
      } else {
        mids.push(nums2[j++]);
      }
    } else if (i < nums1.length) {
      mids.push(nums1[i++]);
    } else if (j < nums2.length) {
      mids.push(nums2[j++]);
    }
  }
  return mids.reduce((p, c) => p + c) / mids.length;
};

module.exports = {
  name: "4. 寻找两个正序数组的中位数",
  fn: findMedianSortedArrays,
  usecases() {
    return [
      {
        args: [[1, 3], [2]],
        target: 2,
      },
      {
        args: [
          [1, 2],
          [3, 4],
        ],
        target: 2.5,
      },
    ];
  },
};
