/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    //     let done = false;
    //     let count = 0;
    //     while(!done){
    //         done = true;
    //         for( let i = 0; i < nums.length; i++){
    //             if(nums[i] === 0){
    //                 nums = nums.slice(0,i).concat(nums.slice(i+1));
    //                 done = false;
    //                 count++;
    //                 break;
    //             }  
    //         }
    //     }

    //     while(count > 0){
    //         nums.push(0);
    //         count--;
    //     }
    //     console.log(nums)
    let anchor = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[anchor], nums[i]] = [nums[i], nums[anchor]];
            anchor++
        }
    }
};