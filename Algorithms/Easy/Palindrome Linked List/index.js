/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let pre = null;
  while (head) {
    next = head.next;
    head.next = pre;
    if (next === head.next) {
      return true;
    }
  }
};
