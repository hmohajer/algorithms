//  -make thirdHighest function to find third highest number in array
//  -get an array
//  -define three var to store first second and third highest number
//  -loop through the array
//  -if the item is greater than firstMax 
//       -put second to third 
//       -first to second
//       -and item to first
//  -else if item is greater than secondMax
//       -put second to third 
//       -and item to second
//  -else if item is greater than thirdMax
//       -and item to third
//  -after loop return the thirdMax


const thirdHighest = (arr) =>{
    let firstMax = Number.NEGATIVE_INFINITY;
    let secondMax = Number.NEGATIVE_INFINITY;
    let thirdMax = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] > firstMax){
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = arr[i];
        }else if(arr[i] > secondMax){
            thirdMax = secondMax;
            secondMax = arr[i];
            
        }else if(arr[i] > thirdMax){
            thirdMax = arr[i];
        }
        
    }
    return thirdMax;
}
let x = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
console.log(thirdHighest(x));