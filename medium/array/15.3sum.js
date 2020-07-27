/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let sum = 0 - nums[i];
            let start = i + 1;
            let end = nums.length - 1;
            while (start < end) {
                if ((nums[start] + nums[end]) === sum) {

                    result.push([nums[i], nums[start], nums[end]]);

                    while (start < end && nums[start] == nums[start + 1]) start++
                    while (start < end && nums[end] == nums[end - 1]) end--

                    start++
                    end--
                } else if (nums[start] + nums[end] > sum) {
                    end--;
                } else {
                    start++;
                }
            }

        }
    }
    return result;
};
