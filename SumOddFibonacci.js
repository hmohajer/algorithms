// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.


//  -define two variables  oneBefore lastOne
//  -define variable "sum" to store the last result
//  -make a loop 
//  -put the last number inside a temporary variable
//  -if the last number is odd add it to sum
//  -and put the sum of last two numbers into last number
//  -and put the last number into oneBefore


function sumFibs(num) {
    let oneBefore = 0, lastOne = 1, sum = 0;
    while (lastOne < num) {
        let temp = lastOne;
        if(lastOne % 2 !== 0) sum += lastOne;
        lastOne += oneBefore;
        oneBefore = temp;
    }
    return sum;
}
console.log(sumFibs(10));