// Magic Squares
// A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. Here's an example:

// 8 1 6
// 3 5 7
// 4 9 2

// The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.

// Write a function that, given a grid containing the numbers 1-9, determines whether it's a magic square. Use whatever format you want for the grid, such as a 2-dimensional array, or a 1-dimensional array of length 9, or a function that takes 9 arguments. You do not need to parse the grid from the program's input, but you can if you want to. You don't need to check that each of the 9 numbers appears in the grid: assume this to be true.

// Example inputs/outputs
// [8, 1, 6, 3, 5, 7, 4, 9, 2] => true
// [2, 7, 6, 9, 5, 1, 4, 3, 8] => true
// [3, 5, 7, 8, 1, 6, 4, 9, 2] => true
// [8, 1, 6, 7, 5, 3, 4, 9, 2] => false




//  -get an array with 9 arg
//  -make a loop of 3 
//  -define 2 variable for sum of row and column
//  -make another loop of 3
//  -sum the row and column
//  -check if the either sum is not 15  return false
//  -after both loops return true

function magicSquares(arr){
    for (let i = 0; i < 3; i++) {
        let sumRow = 0;
        let sumCol = 0;
        for (let j = 0; j < 3; j++) {
            sumRow += arr[i][j];
            sumCol += arr[j][i];
        }
        // console.log(sumRow,sumCol);
        if(sumRow !== 15 || sumCol !== 15){
            return false;
        }
    }
    return true;
}
// let result = magicSquares([[8, 1, 6], [3, 5, 7], [4, 9, 2]]);
// let result = magicSquares([[2, 7, 6], [9, 5, 1], [4, 3, 8]]);
// let result = magicSquares([[3, 5, 7], [8, 1, 6], [4, 9, 2]]);
let result = magicSquares([[8, 1, 6], [7, 5, 3], [4, 9, 2]]);
console.log(result);