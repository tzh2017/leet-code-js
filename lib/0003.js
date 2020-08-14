/**
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let set = new Set();
    for (let j = i; j < s.length; j++) {
      const e = s[j];
      if (set.has(e)) break;
      else set.add(e);
    }
    if (set.size > max) max = set.size;
  }
  return max;
};

module.exports = {
  name: "3. 无重复字符的最长子串",
  fn: lengthOfLongestSubstring,
  params() {
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
