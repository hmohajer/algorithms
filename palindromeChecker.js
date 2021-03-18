// Declare a function isPalindrome(str) that takes a string as an input.
// Return true if the given string is a palindrome. Otherwise, return false.



//  -get a string
//  -make the text lower case
//  -remove all spaces and non letters
//      -define a var with all letters of alphabet
//      -make a loop through the text
//      -compare each letter 
//      -if it was between alphabet put the letter in the cleanText
//  -make a loop for half of the length of the clean string
//  -if the letter is NOT the same with its equivalent from end return false 
//  -after loop return true
//  -


function isPalindrome(str){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split("");
    str = str.toLowerCase();
    // console.log(str);
    let cleanStr = "";
    for(let i = 0; i < str.length; i++){
        if(alphabet.indexOf(str[i]) !== -1){
            cleanStr += str[i];
        }
    }
    console.log(cleanStr);
    for(let i=0; i < Math.floor(cleanStr.length/2); i++){
        // console.log(i);
        if(cleanStr[i] !== cleanStr[cleanStr.length-1-i]) {
            console.log(cleanStr[i]);
            console.log(cleanStr[cleanStr.length-1-i]);
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("kko   oytY.o.o-4-k.-K"));