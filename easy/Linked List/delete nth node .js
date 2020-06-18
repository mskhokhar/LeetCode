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
var removeNthFromEnd = function(head, n) {
    let start, left, right = head;
    start = left = {next : head};
    
    while(n--) right = right.next;
    
    while(right){
        right = right.next;
        left = left.next;
    }
    
    left.next = left.next.next;
    return start.next;
    
}