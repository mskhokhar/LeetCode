// Input: [1,4,2,5,9,3]
//      1
//    /   \
//   4     2
//  / \   /
// 5   9  3
// Output: [5,4,9,1,3,2]


// Iterative Time: O(N) Space: O(1)
const inorderTraversal = root => {
    let curr = root;
    let pre;
    let res = [];
    while (curr) {
        if (curr.left === null) {
            res.push(curr.val);
            curr = curr.right;
        } else {
            pre = curr.left;
            while (pre.right) {
                pre = pre.right;
            }
            pre.right = curr;
            let temp = curr;
            curr = curr.left;
            temp.left = null;
        }
    }

    return res;
}


// Recursive
var inorderTraversal = function (root) {
    //base case of recursion if it's just last leaf
    if (!root) return [];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]

};

// Iterative Time: O(N) Space: O(N)
const inorderTraversal = root => {
    const stack = []; // [1] root = 9
    const result = [];// [5,4,] 

    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            result.push(root.val);
            root = root.right;
        }
    }

    return result;
}
