var containsDuplicate = function(nums) {
    
    // let set = new Set(nums);
    // return !(nums.length === set.size);

    let hash = {};
    for(let i = 0; i < nums.length; i++){
        if(hash[nums[i]]) return true;
        hash[nums[i]] = true;
    }
    return false;
    
};