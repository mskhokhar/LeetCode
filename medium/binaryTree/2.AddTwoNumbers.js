// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


// Input: (2 -> 4 -> 3 -> 1) + (5 -> 6 -> 4)
//              1342         +      465
// Output: 7 -> 0 -> 8 -> 1
//              1807


// we just have a while loop going for both lists
// create a result array, reverse the array at end

//Explanation: 342 + 465 = 807.
// [7,0,8] [8,0,7]'807' parseInt

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    let head = new ListNode(); // null -> 7 -> 0
    let copy = head;

    let val1, val2;
    let carry = 0;
    while (l1 || l2) {
        let sum, val3;
        if (l1) {
            val1 = l1.val;
            l1 = l1.next;
        } else {
            val1 = 0;
        };
        if (l2) {
            val2 = l2.val;
            l2 = l2.next;
        } else {
            val2 = 0;
        };
        sum = val1 + val2 + carry;

        if (sum > 9) {
            val3 = sum % 10;
            carry = (sum - val3) / 10;
        } else {
            val3 = sum;
            carry = 0;
        }

        head.next = new ListNode(val3);
        head = head.next;
        if (carry > 0) head.next = new ListNode(carry);
    };

    return copy.next;
};



