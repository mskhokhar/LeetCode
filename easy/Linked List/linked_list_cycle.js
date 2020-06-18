/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let visited = [];
    let pointer = head;
    while (pointer !== null) {
        visited.push(pointer);
        if (visited.includes(pointer.next)) return true;
        pointer = pointer.next;
    }
    return false;
};