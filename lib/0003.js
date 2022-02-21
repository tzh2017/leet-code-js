/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let max = 0;
  for (let i = 0, j = 0; j < s.length; j++) {
    const e = s[j];
    if (map.has(e)) {
      i = Math.max(map.get(e) + 1, i);
    }
    max = Math.max(max, j - i + 1);
    map.set(e, j);
  }
  return max;
};

module.exports = {
  name: "3. 无重复字符的最长子串",
  fn: lengthOfLongestSubstring,
  usecases() {
    return [
      {
        args: ["abcabcbb"],
        target: 3,
      },
      {
        args: ["bbbbb"],
        target: 1,
      },
      {
        args: ["pwwkew"],
        target: 3,
      },
    ];
  },
};
