// Given a m x n grid filled with non - negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
// Note: You can only move either down or right at any point in time.

// Input:
// [
//     [1, 3, 1],
//     [1, 5, 1],
//     [4, 2, 1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.
// create same sized 2d array but each cell will be filled with sum
// at each step, compare the value of top and left. 
// see which is the lesser value, and add that to the path
/*
[
    [1, 4, 5],
    [2, 7, 6],
    [6, 8, 7]
]

[
    [1, 4, 5],
    [2, x, x],
    [6, x, x]
]
*/

// creating my own Array: data struc
// tabulizing

// first step: create top layer and left most layer


//Step 1: Approach
//STep2: pseudo Code
//Step3: Actual Code

var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    let table = new Array(m).fill().map(() => new Array(n).fill(Infinity));

    table[0][0] = grid[0][0];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j < n - 1) {
                table[i][j + 1] = Math.min(table[i][j] + grid[i][j + 1], table[i][j + 1])
            }
            if (i < m - 1) {
                table[i + 1][j] = Math.min(table[i][j] + grid[i + 1][j], table[i + 1][j])
            }
        }
    }
    return table[m - 1][n - 1];
};

var minPathSum = function (grid) {
    let myGrid = [[grid[0][0]]];
    let [row, col] = [grid.length, grid[0].length];

    // leftmost column
    for (let i = 1; i < row; i++) {
        myGrid.push([myGrid[i - 1][0] + grid[i][0]]);
    };

    // top row
    for (let i = 1; i < col; i++) {
        myGrid[0][i] = myGrid[0][i - 1] + grid[0][i];
    };

    // [
    //     [1, 4, 5],
    //     [2],
    //     [6]
    // ]

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (myGrid[i - 1][j] > myGrid[i][j - 1]) {
                myGrid[i][j] = myGrid[i][j - 1] + grid[i][j];
            } else {
                myGrid[i][j] = myGrid[i - 1][j] + grid[i][j];
            }
        }
    }

    return myGrid[row - 1][col - 1];
};



grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]
console.log(minPathSum(grid))


