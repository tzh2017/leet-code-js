function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let node = head;
  let overflow = 0;
  do {
    let val = l1.val + l2.val + overflow;
    if (val >= 10) {
      overflow = 1;
      val -= 10;
    } else {
      overflow = 0;
    }
    node.next = new ListNode(val);
    node = node.next;
    l1 = l1.next;
    l2 = l2.next;
  } while (l1 && l2);

  let lothers = l1 || l2;
  while (lothers) {
    let val = lothers.val + overflow;
    if (val >= 10) {
      overflow = 1;
      val -= 10;
    } else {
      overflow = 0;
    }
    node.next = new ListNode(val);
    node = node.next;
    lothers = lothers.next;
  }

  if (overflow > 0) {
    node.next = new ListNode(overflow);
  }

  return head.next;
};

module.exports = {
  name: "2. 两数相加",
  fn: addTwoNumbers,
  params() {
    function getNodes(arr) {
      let head = new ListNode(arr[0]);
      let node = head;
      for (let i = 1; i < arr.length; i++) {
        node.next = new ListNode(arr[i]);
        node = node.next;
      }
      return head;
    }
    return [
      {
        args: [getNodes([2, 4, 3]), getNodes([5, 6, 4])],
        target: getNodes([7, 0, 8]),
      },
      {
        args: [getNodes([9, 9, 9]), getNodes([1])],
        target: getNodes([0, 0, 0, 1]),
      },
    ];
  },
};
