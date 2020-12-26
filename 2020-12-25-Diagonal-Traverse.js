/* 
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

Example:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]

Note:

The total number of elements of the given matrix will not exceed 10,000.
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */



const findDiagonalOrder = function (matrix) {
    // handle edge cases of [], [n], and [[n, n]]
    if (matrix.length <= 1) {
        if (Array.isArray(matrix[0])) return matrix[0];
        return matrix
    };
    
    // declare variables
    let arr = [matrix[0][0]];
    let row = 0, col = 0, rows = matrix.length - 1, cols = matrix[0].length - 1
    
    // declare helper functions for traversing with diagonals (diagonals are 
    // recursive until hitting an edge)
    function rightOne() {
        col++;
        arr.push(matrix[row][col]);
    }
    
    function downLeft() {
        row++, col--;
        arr.push(matrix[row][col]);
        if (col !== 0 && row !== rows) downLeft();
    }
    
    function downOne() {
        row++;
        arr.push(matrix[row][col]);
    }
    
    function upRight() {
        row--, col++;
        arr.push(matrix[row][col]);
        if (row !== 0 && col !== cols) upRight();
    }
    
    // handle edge case of a matrix with only a single column
    if (matrix[0].length === 1) {
        while (row < rows) downOne();
        return arr
    }

    // move one to the right to begin the traversal
    rightOne();

    // commence pattern of traversing downLeft, then down one or right one 
    // (depending on which edge we hit), then up right, then right one or down 
    // one (depending on which edge we hit), until we reach the bottom right.
    while (true) {
        downLeft();
        if (matrix[row + 1]) downOne(); else rightOne();
        if (row === rows && col === cols) break;
        upRight();
        if (matrix[row][col + 1]) rightOne(); else downOne();
        if (row === rows && col === cols) break;
    }

    // return our array :)
    return arr;
};

console.log(findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));

console.log(findDiagonalOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]));

console.log(findDiagonalOrder([]));
console.log(findDiagonalOrder([1]));
console.log(findDiagonalOrder([[1, 2]]));
console.log(findDiagonalOrder([[1],[2]]));