/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let minLength = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    if (minLength > strs[i].length) minLength = strs[i].length;
  }
  for (let i = 0; i <= minLength; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) return strs[0].slice(0, i);
    }
  }
  return strs[0].slice(0, minLength);
};

module.exports = {
  name: "14. 最长公共前缀",
  fn: longestCommonPrefix,
  params() {
    return [
      {
        args: [["flower", "flow", "flight"]],
        target: "fl",
      },
      {
        args: [["dog", "racecar", "car"]],
        target: "",
      },
    ];
  },
};
