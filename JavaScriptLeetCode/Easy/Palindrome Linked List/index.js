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
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast) return (slow = slow.next);
  slow = reverseList(slow);

  while (slow) {
    if (slow.val !== head.val) {
      return false;
    }
    slow = slow.next;
    head = head.next;
  }
  const reverseList = (head) => {
    let prev = null;
    while (head !== null) {
      const next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  };
};
//Time Complexity: O(n)
//Space Complexity: O(1)
