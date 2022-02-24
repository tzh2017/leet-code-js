/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const leftMap = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    if (leftMap.has(e)) {
      stack.push(e);
    } else {
      if (stack.length === 0) return false;

      const removed = stack.splice(-1, 1)[0];
      if (leftMap.get(removed) !== e) return false;
    }
  }
  return stack.length == 0;
};

module.exports = {
  name: "20. 有效的括号",
  fn: isValid,
  usecases() {
    return [
      {
        args: ["()"],
        target: true,
      },
      {
        args: ["()[]{}"],
        target: true,
      },
      {
        args: ["(]"],
        target: false,
      },
      {
        args: ["([)"],
        target: false,
      },
      {
        args: ["{[]}"],
        target: true,
      },
    ];
  },
};
