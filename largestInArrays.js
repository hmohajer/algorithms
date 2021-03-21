//  - make a function to get an array of arrays
//  - make two for loop inside each other 
//  - first to go through parent array (array of arrays)
//  - define a variable named max put the first item of selected array
//  - second loop go through each item of that array
//  - if item is greater 5han max put it inside max
//  - after finishing inside loop replace the max with the array
//  - after parent loop return array


function largestOfFour(arr) {
    for(let i = 0; i < arr.length; i++){
        let max = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if(arr[i][j] > max){
                max = arr[i][j];
            }
        }
        arr[i] = max;
    }
    return arr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  //Returns [5,27,39,1001]