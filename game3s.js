// Game of 3s
// We want to play a "Game of 3s". Here's how you play it:
// First, you pick a random number. Then, repeatedly do the following:
// If the number is divisible by 3, divide it by 3.
// If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
// The game stops when you reach "1".

// Challenge Description
// The input is a single number: the number at which the game starts. Write a program that plays the 3s game, and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.

// Input Description
// The input is a single number: the number at which the game starts.

// gameOfThree(100);
// Output Description
// The output is a list of valid steps that must be taken to play the game. Each step is represented by the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.

// //OUTPUT:
// 100 -1
// 33 0
// 11 1
// 4 -1
// 1

//  -define a variable "number", put a number inside
//  -make a loop
//  - print number
//  - if number is devisable  by 3 do it and print 0
//  - else if the remaining is 2 add 1 and print 1 and divide by 3
//  - else if the remaining is 1 subtract 1 and print -1 and divide by 3

function gameOfThree(number) {

    while (number > 1) {
        let output = "";
        output +=  number
        // console.log(number);
        if (number % 3 === 0) {
            number /= 3;
            output += " 0"
            // console.log(0);
        } else if (number % 3 === 2) {
            number += 1;
            number /= 3;
            output += " 1"
            // console.log(1);
        } else if (number % 3 === 1) {
            number -= 1;
            number /= 3;
            output += " -1"
            // console.log(-1);
        }
        console.log(output);
    }
    console.log(number);
}


gameOfThree(100);