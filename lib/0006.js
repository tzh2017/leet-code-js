/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let list = new Array(numRows).fill(0).map(() => []);
  for (let i = 0, index = 0, mod = 1; i < s.length; i++, index += mod) {
    if (index === numRows) {
      mod = -1;
      index = numRows - 2;
    } else if (index < 0) {
      mod = 1;
      index = 1;
    }
    list[index].push(s[i]);
  }
  return list.map((e) => e.join("")).join("");
};

module.exports = {
  name: "6. Z 字形变换",
  fn: convert,
  params() {
    return [
      {
        args: ["LEETCODEISHIRING", 3],
        target: "LCIRETOESIIGEDHN",
      },
      {
        args: ["LEETCODEISHIRING", 4],
        target: "LDREOEIIECIHNTSG",
      },
    ];
  },
};
