/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = (head) => {
  if (!head || !head.next) {
    return;
  }

  const mid = findMid(head);
  const reversed = reverse(mid);
  merge(head, reversed);
};

const findMid = (head) => {
  let prev = null;
  let slow = head;
  let fast = slow;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  return slow;
};

const reverse = (head) => {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

const merge = (list1, list2) => {
  while (list2) {
    const next = list1.next;
    list1.next = list2;
    list1 = list2;
    list2 = next;
  }
};
//Time Complexity: O(n)
//Space Complexity: O(1)
