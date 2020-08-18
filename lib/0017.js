/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  const opt = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const arr = [];
  const result = [];
  let track = (arr, index) => {
    if (index >= digits.length) {
      result.push(arr.join(""));
      return;
    }
    const str = opt[digits[index] - 2];
    for (let i = 0; i < str.length; i++) {
      arr[index] = str[i];
      track(arr, index + 1);
    }
  };
  track(arr, 0);
  return result;
};

module.exports = {
  name: "17. 电话号码的字母组合",
  fn: letterCombinations,
  params() {
    return [
      {
        args: ["23"],
        target: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
      },
    ];
  },
};
