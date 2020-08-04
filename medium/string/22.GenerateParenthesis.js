/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];

    const backtrack = (result, curr, open, close) => {
        if (curr.length === n * 2) {
            result.push(curr);
            return;
        }
        if (open < n) {
            backtrack(result, curr.concat('('), open + 1, close)
        }
        if (close < open) {
            backtrack(result, curr.concat(')'), open, close + 1)
        }
    }
    backtrack(result, "", 0, 0);
    return result;
};

