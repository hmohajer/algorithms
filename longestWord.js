//  -get a sentence
//  -split the sentence into words and put in an array
//  -make a loop through array
//  -find the item with longest length
//  -
function findLongestWord(text){
    const arr = text.split(" ");
    var max = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > max){
            max = arr[i].length;
        }
        
    }
    return max;
}

console.log(findLongestWord("May the force be with you"));
