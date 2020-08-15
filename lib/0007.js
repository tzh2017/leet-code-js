/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let s = `${x > 0 ? x : -x}`.split("").reverse().join("");
  let x2 = parseInt(s, 10);
  x2 = x > 0 ? x2 : -x2;
  let xmax = Math.pow(2, 31);
  return x2 > xmax - 1 || x2 < -xmax ? 0 : x2;
};

module.exports = {
  name: "7. 整数反转",
  fn: reverse,
  params() {
    return [
      {
        args: [123],
        target: 321,
      },
      {
        args: [-123],
        target: -321,
      },
      {
        args: [120],
        target: 21,
      },
    ];
  },
};
