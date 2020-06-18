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
    // let visited = [];
    // let pointer = head;
    // while(pointer !== null){
    //     visited.push(pointer);
    //     if(visited.includes(pointer.next)) return true;
    //     pointer = pointer.next;
    // }
    // return false;
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) return true;
    }
    return false;
};