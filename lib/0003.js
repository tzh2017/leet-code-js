var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let map = new Map();
  for (let i = 0, repeatIndex = -1; i < s.length; i++) {
    const e = s[i];
    if (map.has(e)) {
      repeatIndex = Math.max(map.get(e), repeatIndex);
    }
    max = Math.max(max, i - repeatIndex);
    map.set(e, i);
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
