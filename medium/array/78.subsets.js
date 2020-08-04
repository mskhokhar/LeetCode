/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [];

    const permute = (arr, index) => {
        result.push(arr);
        for (let i = index; i < nums.length; i++) {
            permute([...arr, nums[i]], i + 1)
        }
    }

    permute([], 0)

    return result;
};

