/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const list = [];
  function traverse(cur, openBracket, closeBracket) {
    if (openBracket > closeBracket) return; //edge case 第一种不合格的情况，停止回溯
    if (openBracket < 0 || closeBracket < 0) return; //edge case 第二种不合格的情况，停止回溯
    if (openBracket === 0 && closeBracket === 0) return list.push(cur); //找到合格的字符串，push到数组里

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
