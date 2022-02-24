/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let head2 = new ListNode(null, head);
  let slow = head2;
  let fast = head2;

  while (n-- > 0) {
    fast = fast.next;
  }
  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head2.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createLink(arr) {
  let head;
  if (arr.length) {
    for (let i = arr.length - 1; i >= 0; i--) {
      head = new ListNode(arr[i], head);
    }
  } else {
    head = null;
  }
  return head;
}

module.exports = {
  name: "19. 删除链表的倒数第 N 个结点",
  fn: removeNthFromEnd,
  usecases() {
    return [
      {
        args: [createLink([1, 2, 3, 4, 5]), 2],
        target: createLink([1, 2, 3, 5]),
      },
      {
        args: [createLink([1]), 1],
        target: createLink([]),
      },
      {
        args: [createLink([1, 2]), 1],
        target: createLink([1]),
      },
    ];
  },
};
