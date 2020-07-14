/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        // for each numb - 1, make the number at index num - 1negative if it's positive or skip it if it's is negative
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) nums[index] *= -1;
    }
    let result = [];


    // iterate through the array again and store the index of the number of which is positive and add one to the number being stored
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i];
        if (number > 0) result.push(i + 1);
    }

    return result;
};