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
    // let array = [];
    // let p1 = head;
    // while( p1 != null){
    //     array.push(p1.val);
    //     p1 = p1.next;
    // }
    // return JSON.stringify(array) === JSON.stringify(array.reverse());
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next
    }

    fast = head;
    slow = reverse(slow);
    while (slow !== null) {
        if (slow.val !== fast.val) return false;
        slow = slow.next;
        fast = fast.next;
    }
    return true;

};

let reverse = function (head) {
    let prevNode = null;
    while (head !== null) {
        let nextNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }
    return prevNode;
}