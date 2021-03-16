// 1. Addition
//  1- make a new varable "sum"
//  2- for each number from 200 to 2700
//      3-if it is divisible by 3 OR 5
//          4-check if that number is not divisible by 3 AND 5
//              5- add to sum     
// 
const specialSum = (start,end) => {
    let sum = 0;
    for(let i = start; i <= end; i++){
        if(i % 3 === 0 || i % 5 === 0){
            if(!(i % 3 === 0 && i % 5 === 0)){
                sum += i;
                // console.log(i);
            }
        }
    }
    return sum;
}
// 
// console.log(specialSum (1,15));
// console.log(specialSum (200,2700));

// 2. Shift the Values
//      1-get an array name arr1
//      2-make a variable temp
//      3-make a loop for half of array items
//      4-get an item from arr1
//      5-with the help of temp change it with its equivalet from last
//          a-put the item in temp
//          b-put the equivalent in the item
//          c-put temp in the equivalent

let arr1 = [2,1,6,4,-7];
let temp;
// console.log("initial:",arr1);
for(let index=0; index < Math.floor(arr1.length/2); index++){
    temp = arr1[index];
    arr1[index] = arr1[arr1.length-1-index];
    arr1[arr1.length-1-index] = temp;
}
// console.log("Ready:  ", arr1);

// 3. FizzBuzz
//  1-make an empty array
//  2-make a loop from 1 to 135
//  3-if the number is divisible by 3 AND 5 
//      4-put FizzBuzz in array
//  5-else if the number is divisible by 3
//      6-put Fizz in array
//  7-else if the number is divisible by 5
//      8-put Buzz in array
//  9-else 
//      10-put the number in array
let arr2 = [];
for(let i = 1; i <= 135; i++){
    if(i % 3 === 0 && i % 5 === 0){
        arr2.push("FizzBuzz");
    }else if(i % 3 === 0){
        arr2.push("Fizz");
    }else if(i % 5 === 0){
        arr2.push("Buzz");
    }else {
        arr2.push(i);
    }
}
// console.log(arr2);

// 4. Fibonacci
//     1-declare a new variable lastNumber = 1 and oneBefore = 0
//     2-print oneBefore as the first number
//     3-make a loop until lastNumber is less than 1,000,000
//     4-print lastNumber
//     5-make temp variable and put lastNumber into temp
//     6-put the sum of lastNumber and oneBefore into lastNumber
//     7-put temp into oneBefore
//     -
let lastNumber = 1; 
let oneBefore = 0;
console.log(oneBefore);
while (lastNumber < 1000000){
    console.log(lastNumber);
    let temp = lastNumber;
    lastNumber += oneBefore;
    oneBefore = temp;
}

// 0 1 1 2 3 5 8 13 21...

// 5. Remove the Negative
//    -define the array
//    -loop through array 
//    -if the item is less than 0
//    -remove the item
//    -go one index back 

let arr3 = [1,2,-8,-3,7,1,3,-2];
for(let index = 0; index < arr3.length; index++){
    if(arr3[index]< 0){
        arr3.splice(index, 1);
        index--;
    } 
}
console.log(arr3);

//index =0 => 1 < 0 = false => [1,2,-8,-3,7,1,3,-2]
//index =1 => 2 < 0 = false => [1,2,-8,-3,7,1,3,-2]
//index =2 => -8 < 0 = true => [1,2,-3,7,1,3,-2] => index -1
//index =2 => -3 < 0 = true => [1,2,7,1,3,-2] => index -1
//...
//index =5 => -2 < 0 = true => [1,2,7,1,3,-2] => index -1




// 6. Communist Censorship
//    -get the word that should be censored //censorWord
//    -define the array
//    -search the word in the array
//    -check the word length and put * instead of each letter in that word
//    -print the result

// censorWord= "Man";
censorWord= "Program";
let arr4 = ['Man', 'I','Love','The','Matrix','Program']
let index = arr4.indexOf(censorWord)
let tmp = "";
for(let i=0;i <= arr4[index].length-1;i++ ) tmp += "*";
arr4[index]= tmp;
console.log(arr4);

// Program = 7 => index = 5 => ['Man', 'I','Love','The','Matrix','*******']
// I = 1 => index = 1 => ['Man', '*','Love','The','Matrix','Program']
// Man = 3 => index = 0 => ['***', 'I','Love','The','Matrix','Program']
