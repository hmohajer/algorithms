let arr=[5,8,1,6,9,4];
let t=1;
for(let j=0;j < arr.length-1;j++){
    for(let i= 0;i < arr.length-j-1;i++){
        console.log(t++);
        if(arr[i] > arr[i+1]){
            const temp = arr[i];
            arr[i]= arr[i+1];
            arr[i+1] = temp;
        }
    }
}
console.log(arr);
