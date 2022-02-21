/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const opt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let lastValue = 0;
  for (let i = 0; i < s.length; i++) {
    const value = opt[s[i]];
    result += value;
    if (i > 0 && value > lastValue) {
      result -= 2 * lastValue;
    }
    lastValue = value;
  }
  return result;
};

module.exports = {
  name: "13. 罗马数字转整数",
  fn: romanToInt,
  usecases() {
    return [
      {
        args: ["III"],
        target: 3,
      },
      {
        args: ["IV"],
        target: 4,
      },
      {
        args: ["LVIII"],
        target: 58,
      },
      {
        args: ["MCMXCIV"],
        target: 1994,
      },
    ];
  },
};
