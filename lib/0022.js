/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const list = [];
  function traverse(cur, openBracket, closeBracket) {
    if (openBracket > closeBracket) return;
    if (openBracket < 0 || closeBracket < 0) return;
    if (openBracket === 0 && closeBracket === 0) return list.push(cur);

    traverse(cur + "(", openBracket - 1, closeBracket) +
      traverse(cur + ")", openBracket, closeBracket - 1);
  }
  traverse("", n, n);
  return list;
};

module.exports = {
  name: "22. 括号生成",
  fn: generateParenthesis,
  usecases() {
    return [
      {
        args: [3],
        target: ["((()))", "(()())", "(())()", "()(())", "()()()"],
      },
      {
        args: [1],
        target: ["()"],
      },
    ];
  },
};
