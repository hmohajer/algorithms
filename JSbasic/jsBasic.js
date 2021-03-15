// 1. Print 1 - 135

for(let i = 1; i <= 135; i++){
    // console.log(i);
}
// 2. Print Odd Numbers 1 - 135

for(let i = 1; i <= 135; i++){
    if(i%2 != 0 ){
        // console.log(i);
    }
}
// 3. Sum of Printed Numbers
// Number is: 0 Sum: 0
// Number is: 1 Sum: 1
// ...
let sum = 0;
for(let i = 0; i <= 135; i++){
    sum += i;
    // console.log(`Number is: ${i} Sum: ${sum}`);
}

// 4. Print the elements of an array
const x = [1, 4, 8, 12];
for(i = 0; i < x.length; i++){
    // console.log(x[i]);
}
// x.forEach(xContent => console.log(xContent));

// 5. Find Max
x.push(0, -2,3,-1);
let xmax;
for(i = 0; i < x.length; i++){
    if(i == 0){
        xmax = x[0]; 
    }else if (x[i] > xmax){
        xmax = x[i];
    }
}
console.log(xmax);

// 6. Get Average
sum = 0;
x.forEach(xContent => {
    sum += xContent;
});
console.log(sum / x.length);


// 7. Eliminate the Negatives
// console.log(x);
for(i = 0; i < x.length; i++){
    // if(x[i]<0) x[i]=0;
}
console.log(x);

// 8. Number to String

// the output should be [1,'Turing,0,'Turing'].
for(i = 0; i < x.length; i++){
    if(x[i]<0) x[i]="Turing";
}
console.log(x);
