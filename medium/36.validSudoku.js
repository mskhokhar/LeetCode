var isValidSudoku = function (board) {
    let boxSet = new Set();
    let columnSet = new Set();
    let rowSet = new Set();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let num = board[i][j];
            let rowStr = 'row' + i + num; // 'row05'
            let columnStr = 'column' + j + num; // 'column05'
            let boxStr = 'box' + Math.floor(i / 3) + Math.floor(j / 3) + num; // 'box005'

            if (!isNan(num)) { // if ele is a number
                if (rowSet.has(rowStr)) return false;
                if (columnSet.has(columnStr)) return false;
                if (boxSet.has(boxStr)) return false;

                rowSet.add(rowStr);
                columnSet.add(columnStr);
                boxSet.add(boxStr);
            }
        }
    }

    return true;
};