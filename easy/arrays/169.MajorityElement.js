/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let counter = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (!counter[num]) counter[num] = 0;
        counter[num] += 1;
    }
    let count = []
    for (const num in counter) {
        count.push([num, counter[num]])
    }
    count.sort(function (a, b) {
        return a[1] - b[1];
    });
    console.log(count)
    return count[count.length - 1][0];
};