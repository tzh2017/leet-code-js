/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let P = ["I", "V", "X", "L", "C", "D", "M", "?"];
  let NI = (n, i) => "".padStart(n, P[i]);
  let arr = [];
  for (let i = 0; num > 0; i++, num = ~~(num / 10)) {
    let n = num % 10;
    if (n == 0) {
      continue;
    } else if (n > 0 && n < 4) {
      arr.push(NI(n, i * 2));
    } else if (n == 4) {
      arr.push(`${P[i * 2]}${P[i * 2 + 1]}`);
    } else if (n == 5) {
      arr.push(`${P[i * 2 + 1]}`);
    } else if (n < 9) {
      arr.push(`${P[i * 2 + 1]}${NI(n - 5, i * 2)}`);
    } else if (n == 9) {
      arr.push(`${P[i * 2]}${P[i * 2 + 2]}`);
    }
  }
  return arr.reverse().join("");
};

module.exports = {
  name: "12. 整数转罗马数字",
  fn: intToRoman,
  params() {
    return [
      {
        args: [3],
        target: "III",
      },
      {
        args: [4],
        target: "IV",
      },
      {
        args: [58],
        target: "LVIII",
      },
      {
        args: [1994],
        target: "MCMXCIV",
      },
    ];
  },
};
