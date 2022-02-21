/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null;
  while (head) {
    next = head.next;
    head.next = pre;
    pre = next;
    head = next;
  }
  return pre;
};
//Time Complexity: O(n)
//Space Complexity: O(1)
