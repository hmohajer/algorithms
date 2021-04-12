// Selection Sort
// how does it works: This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.

// Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.

// thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits

//  -make a loop 0 to length of list
//  -make a loop from whe the last loop is to the end
//  -make a compare if the number is smallest in the loop swap it with current
//  -

function selectionSort(arr){
    for (let i = 0; i < arr.length-1; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}
console.log(selectionSort([5,8,13,97,2,7,3,36,90,12,41,6]));