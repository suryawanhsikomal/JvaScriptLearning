console.log(`==============Reduce Methos================`);
const arrayOfNumber = [0, 2, 3, 5, 6, 8 ];
const result = arrayOfNumber.reduce( (runningTotal, value) => {
    return runningTotal + value; // 200 + 2
} );
console.log(result);

// const stname =["komal" ,"Amit", "hitesh"]


const array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
// Sum of all even numbers
// Even Numbers
// Sum 
const evenNums = array.filter( value => value%2==0 );
const finalResult = evenNums.reduce((runningTotal, value) => runningTotal + value);
console.log(evenNums);
console.log(finalResult);

console.log("Chaining methods");
const resultSum = array.filter( value => value%2==0)
    .reduce((runningTotal, value) => runningTotal + value);
console.log(resultSum);
// console.log(`------------------------------------doesnt work--------------------`);
// const arrayOfNumber1 = [ 2, 3, 5, 6, 8 ];
// const result1 = arrayOfNumber.reduce( (runningTotal1, value1) => {
//     return runningTotal1 * value1; 
// } );
// console.log(result1);
