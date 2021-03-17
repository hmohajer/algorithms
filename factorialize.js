// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Example Outputs:
// factorialize(0) should return 1.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.

//  -get a number
//  -make sure the number is not negetive and not too big
//  -if the number is 0 return 1
//  -else define a variable to save the calculation and put 1 in it (to make sure that it wont make everything to zero)
//  -make a reverse loop from the number to 2 (becouse 1 make no change in the result) (or normal loop)
//  -return the calculated number
//  -

function factorialize(n){
    if(!(n < 0 || n > 170)){
        let factorial=1;
        if( n !== 0){
            for(let i = n; i > 1; i--){
                // console.log(i);
                factorial *= i;
            }
        }
        return factorial;
    }else{
        return "Error: please enter a valid number between 0 to 170."
    }
}
// factorialize(5);
console.log(factorialize(5));
// console.log(factorialize(0));
// console.log(factorialize(-5));
// console.log(factorialize(10));
// console.log(factorialize(20));

//n = 5 => n>=0 and n<=170 = true => 5 != 0 = true => 5* 1 = 5
// 4* 5 = 20
// 3* 20 = 60
// 2* 60 = 120


//n = 0 => n>=0 and n<=170 = true => 5 != 0 = false => 1


