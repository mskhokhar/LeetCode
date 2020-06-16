/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let input = s;
    let firstPointer = 0;
    let lastPointer = input.length - 1;
    while(firstPointer < lastPointer){
        [input[firstPointer], input[lastPointer]] = [input[lastPointer], input[firstPointer]]
        firstPointer++;
        lastPointer--;
    }
    return s;
};