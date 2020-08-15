/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = s[0] || "";
  let matched = new Array(s.length).fill(0).map(() => ({}));

  for (let len = 1; len <= s.length; len++) {
    for (let i = 0; i + len - 1 < s.length; i++) {
      let j = i + len - 1;
      if (s[i] === s[j] && (len <= 2 || matched[i + 1][j - 1])) {
        matched[i][j] = 1;
        if (result.length < len) {
          result = s.slice(i, j + 1);
        }
      }
    }
  }
  return result;
};

module.exports = {
  name: "5. 最长回文子串",
  fn: longestPalindrome,
  params() {
    return [
      {
        args: ["babad"],
        target: "bab",
      },
      {
        args: ["cbbd"],
        target: "bb",
      },
      {
        args: ["bb"],
        target: "bb",
      },
    ];
  },
};
