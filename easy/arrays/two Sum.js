/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let index1 = 0;
    let foundPair = false;
    while(!foundPair){
        foundPair = true;
        for( let i = index1+1; i < nums.length; i++){
            let required = target - nums[index1];
            if(required === nums[i]){
                return [index1, i];
            }else if( i === nums.length - 1 ){
                index1++;
                foundPair = false;
            }
        }
    }
};