/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let sum = [l1, l2].reduce((a, e) => {
    let list = e;
    let num = [];
    while(list != null) {
      num.unshift(list.val);
      list = list.next;
    }
    return a + +num.join('');
  }, 0);
  let ansArr = sum.toString().split('').reverse();
  let digit = ansArr.pop();
  let ans = new ListNode(digit, undefined);
  while(ansArr.length > 0) {
    digit = ansArr.pop();
    ans = new ListNode(digit, ans);
  }
  return ans;
};