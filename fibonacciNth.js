// ...he gives you the first terms and asks you to write an algorithm that will return the n-th term in the sequence.
// His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...
// Immediately you find the pattern: setting the first two terms to be 1, any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.
// In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.

//  -define a variable and put the number (nth) inside
//  -define lastNumber = 1 as first number and oneBefore = 0 to use it for sum
//  - make a loop to nth
//  -define a temp variable to change numbers
//  -if loop index >0 (after 1nd index) //(to make sure 2 first numbers stay 1)
//          -put the sum of astNumber and oneBefore inside lastNumber
//      `   -put the old value of lastNumber in oneBefore
//  -return the number
function fibunacciNth(nth){
    let lastNumber = 1; 
    let oneBefore = 0;
    for (let i = 0; i < nth; i++) {
        let temp = lastNumber;
        if(i >0 ){
            lastNumber += oneBefore;
            oneBefore = temp;
        }
    }
    return lastNumber;
}
console.log(fibunacciNth(227));


// 1
// 1
// 2
// 3
// 5