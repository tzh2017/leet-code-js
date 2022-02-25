/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 == null) {
    return list2;
  } else if (list2 == null) {
    return list1;
  } else if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

var mergeTwoListsV2 = function (list1, list2) {
  let head = new ListNode();
  let tail = head;
  while (list1 != null || list2 != null) {
    if (list1 != null && list2 != null) {
      if (list1.val <= list2.val) {
        tail.next = new ListNode(list1.val);
        list1 = list1.next;
      } else {
        tail.next = new ListNode(list2.val);
        list2 = list2.next;
      }
    } else if (list1 != null) {
      tail.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      tail.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    tail = tail.next;
  }
  return head.next;
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
  name: "21. 合并两个有序链表",
  fn: mergeTwoLists,
  usecases() {
    return [
      {
        args: [createLink([1, 2, 4]), createLink([1, 3, 4])],
        target: createLink([1, 1, 2, 3, 4, 4]),
      },
      {
        args: [createLink([]), createLink([])],
        target: createLink([]),
      },
      {
        args: [createLink([]), createLink([0])],
        target: createLink([0]),
      },
    ];
  },
};
