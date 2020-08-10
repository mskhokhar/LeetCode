var rotate = function (matrix) {
    //loop through the matrix and transpose
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            [ matrix[i][j], matrix[j][i] ] = [ matrix[j][i], matrix[i][j] ];
        }
    }
    //loop through the altered matrix and swap the rows
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length/2; j++) {
            [matrix[i][j], matrix[i][matrix.length - 1 - j]] = [ matrix[i][matrix.length - 1 - j], matrix[i][j]];
        }
    }
    return matrix
};