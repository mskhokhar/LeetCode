/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
//     let negative = false;
//     if(x < 0) negative = true;
//     x = Math.abs(x);
    
//     if(!negative){
//         x = Number(x.toString().split('').reverse().join(''));
//     }else{
//         x = -Number(x.toString().split('').reverse().join(''));
//     }
    // let max = Math.pow(2,31) - 1;
    // let min = - Math.pow(2,31)
    // if(x < min || x > max) return 0;
    // return x
    let negative = false;
    if(x < 0) negative = true;
    x = Math.abs(x);
    let result = 0;
    while(x !== 0){
        let remainder = x % 10;
        x = Math.floor(x / 10);
        result = result * 10 + remainder;
    }
    let max = Math.pow(2,31) - 1;
    let min = - Math.pow(2,31)
    if(negative){
        result = -result;
    }
    if(result < min || result > max) return 0;
    return result;
};