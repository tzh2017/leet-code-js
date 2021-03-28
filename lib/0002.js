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
  function add(l1, l2, overflow, node) {
    if (!l1 && !l2 && !overflow) {
      return;
    }
    let val = 0;
    if (l1) val += l1.val;
    if (l2) val += l2.val;
    if (overflow) val += overflow;

    let nextNode;
    let nextOverflow = 0;
    if (val >= 10) {
      node.next = nextNode = new ListNode(val - 10);
      nextOverflow = 1;
    } else {
      node.next = nextNode = new ListNode(val);
    }
    add(l1 ? l1.next : null, l2 ? l2.next : null, nextOverflow, nextNode);
  }

  const head = new ListNode(0);
  add(l1, l2, 0, head);
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
      {
        args: [getNodes([0]), getNodes([0])],
        target: getNodes([0]),
      },
    ];
  },
};
