var countSubstrings = function (s) {
    let count = 0;
    let matrix = [];
    for(let i = 0; i < s.length; i++){
        matrix.push(new Array(s.length).fill(0));
    }
    for (let i = 0; i < s.length; i++) {
        matrix[i][i] = 1;
        count++;
    }
    for (let col = 1; col < matrix.length; col++) {
        for (let row = 0; row < col; row++) {
            if(row === col - 1 && s[row] === s[col]){
                matrix[col][row] = 1;
                count++
            }else if (matrix[col-1][row+1] === 1 && s[col] === s[row]) {
                matrix[col][row] = 1;
                count++;
            }
        }
    }
    return count;
};