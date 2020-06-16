/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let needsAddition = true;
    let lastIndex = digits.length-1;
    while(needsAddition){
         needsAddition = false;
        let last = digits[lastIndex] + 1;
        if(last > 9){
            if(lastIndex === 0){
                digits[lastIndex] = last;
            }else{
                digits[lastIndex] = 0;
                needsAddition = true;
                lastIndex--;
            }
        }else{
            digits[lastIndex] = last;
        }
    }
    return digits.join('').split('');
};