/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let plist = [];
  for (let i = 0; i < p.length; i++) {
    const e = p[i];
    if (e === "*") {
      plist[plist.length - 1].anyCount = true;
    } else if (e === ".") {
      plist.push({ any: true });
    } else {
      plist.push({ e });
    }
  }
  let match = function (s, si, plist, pi) {
    // 正则匹配结束
    if (pi >= plist.length) return si >= s.length;
    // 字母匹配结束
    if (si >= s.length) {
      while (pi < plist.length && plist[pi].anyCount) pi++;
      return pi >= plist.length;
    }
    // 消费掉固定的单词和规则
    if (!plist[pi].anyCount) {
      do {
        if (!plist[pi].any && plist[pi].e !== s[si]) return false;
        pi++;
        si++;
      } while (si < s.length && pi < plist.length && !plist[pi].anyCount);
      return match(s, si, plist, pi);
    }
    // 0个，当前单词直接交给下个规则处理
    if (match(s, si, plist, pi + 1)) return true;
    // n个，
    do {
      if (!plist[pi].any && plist[pi].e !== s[si]) return false;
      if (match(s, ++si, plist, pi + 1)) return true;
    } while (si < s.length && pi < plist.length);

    return match(s, si, plist, pi);
  };
  return match(s, 0, plist, 0);
};

module.exports = {
  name: "10. 正则表达式匹配",
  fn: isMatch,
  params() {
    return [
      {
        args: ["aa", "a"],
        target: false,
      },
      {
        args: ["aa", "a*"],
        target: true,
      },
      {
        args: ["ab", ".*"],
        target: true,
      },
      {
        args: ["aab", "c*a*b"],
        target: true,
      },
      {
        args: ["mississippi", "mis*is*p*."],
        target: false,
      },
    ];
  },
};
