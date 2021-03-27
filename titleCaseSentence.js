// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".
// For this algorithm, you can use the split() method.
// titleCase("I'm a little tea pot")should return a string.
// titleCase("I'm a little tea pot")should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".

//  - get a string
//  -make the string lower case
//  -split the string into words
//  -make a loop through the array for(let i in array)
//  -item = first letter of word to capital + the rest of the word
//  -

let text = "I'm a little tea pot";
text = text.toLowerCase();
// console.log(text);
text = text.split(" ");
for(let i in text){
    text[i] = text[i][0].toUpperCase() + text[i].slice(1);
}
text = text.join(" ");
console.log(text);