// Given a non - empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1, 1, 1, 2, 2, 3], k = 2
// Output: [1, 2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
    //declare counter hash
    //iterate over input to develop frequencies
    //obtain the max frequency
    //Declare max freq + 1 length array
    //push in the keys where index is the frequency
    //return top k
var topKFrequent = function (nums, k) {
    let counter = 0;
    nums.forEach(num => {
        if(!counter[num]) counter[num] = 0;
        counter[num] += 1;
    });

    let frequencies = [];
    for( key in counter ){
        let value = counter[key];
        if(!frequencies[value]) frequencies[value] = [];
        frequencies[value].push(key);
    }

    let result = [];

    let pointer = frequencies.length - 1;
    while (result.length < k) {
        let keyArray = frequencies[pointer];
        if (keyArray) {
            while (keyArray.length && result.length < k) {
                result.push(keyArray.pop());
            }
        }
        pointer--;
    }
    return result;
};

