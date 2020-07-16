var rob = function (nums) { //[2,7,9,3,1]                          
    let stolenAmount = []; // [0,2,7,11,11, 11] i = 4 => 11 > 9 + 1

    stolenAmount[0] = 0;
    stolenAmount[1] = nums[0]; // 2

    for (let i = 1; i < nums.length; i++) {
        stolenAmount[i + 1] = Math.max(stolenAmount[i], stolenAmount[i - 1] + nums[i])
    }

    return stolenAmount[nums.length];
};
