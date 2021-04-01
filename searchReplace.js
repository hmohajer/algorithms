// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

// NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"


//  -put the str in an array
//  -make a loop through array
//  -find the word
//  -check the first letter and make the new word same as it 
//  -put the new word instead
//  -join the array and return it

function myReplace(str, before, after) {
    const arr = str.split(" ");
    // arr.forEach((item , index) => {
    //     if(item === before){
    //         if( item[0] === item[0].toUpperCase()){
    //             after = after[0].toUpperCase() + after.slice(1);
    //         }
    //         arr[index] = after;
    //         str = arr.join(" ");
    //     }
    // });
    // return str;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === before){
            if( arr[i][0] === arr[i][0].toUpperCase()){
                after = after[0].toUpperCase() + after.slice(1);
            }
            arr[i] = after;
            str = arr.join(" ");
            // break;
            return str;
        }
    }
    return "I couldn't find \""+before+"\" in your text!";
}
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));