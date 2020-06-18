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
    let array = [];
    let p1 = head;
    while (p1 != null) {
        array.push(p1.val);
        p1 = p1.next;
    }
    return JSON.stringify(array) === JSON.stringify(array.reverse());

};