/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let matched = new Array(s.length).fill(0).map(() => ({}));
  let startIndex = 0;
  let endIndex = 1;
  let length = 1;

  for (let len = 1; len <= s.length; len++) {
    for (let i = 0; i + len - 1 < s.length; i++) {
      let j = i + len - 1;
      if (s[i] === s[j] && (len <= 2 || matched[i + 1][j - 1])) {
        matched[i][j] = 1;
        if (length < len) {
          startIndex = i;
          endIndex = j + 1;
          length = len;
        }
      }
    }
  }
  return s.substring(startIndex, endIndex);
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
