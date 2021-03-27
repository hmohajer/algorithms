// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.
// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.

//  -get an array of 2 numbers
//  -define variable begin assign the smaller number into it and end assign the another 
//  -make a for from begin to end
//  -sum all numbers and put inside sum
//  -

function sumAll(arr) {
    let begin = arr[0];
    let end = arr[1];
    let sum = 0;
    if(arr[0] > arr [1]){
        begin = arr[1];
        end = arr[0]
    }
    for (let i = begin; i <= end; i++) {
        sum += i;
        
    }
    return sum;
}
console.log(sumAll([4, 1]));