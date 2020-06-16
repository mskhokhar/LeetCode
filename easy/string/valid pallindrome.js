/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let filteredString = '';
    for( let i = 0; i < s.length; i++ ){
        let char = s[i];
        if( isDigit(char) || isLetter(char) ) filteredString += char;
    }
    filteredString = filteredString.split(' ').join('').toLowerCase();
    
    return filteredString === reverse(filteredString);
    
};



function reverse(input){
    let start = 0;
    let end = input.length - 1;
    input = input.split('');
    while(start < end){
        [input[start],input[end]] = [input[end],input[start]];
        start++;
        end--;
    }
    return input.join('');
}

function isDigit(c){
    return !isNaN(c);
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}