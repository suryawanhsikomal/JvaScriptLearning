let arrayOfNumber=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`1. Given Array:`);
console.log(arrayOfNumber);
console.log(`2.Length of given array : ${arrayOfNumber.length}`);
console.log(`3.Element of 0 index value: ${arrayOfNumber[0]}`);
let totalElements = arrayOfNumber.length;
console.log(`4.Total Elements in arrayOfNumbers: ${totalElements}`);
console.log(`5.Last Element in arrayOfNumber : ${arrayOfNumber[10]}`); //find the error
 console.log(`6.Display third last element in the array using length property:${arrayOfNumber[11-3]}`);//wrong
 console.log(`================Even index value in given array==========`);
 for (let index = 0; index < arrayOfNumber.length; index++) {
  if(index%2==0)
  {
  const number = arrayOfNumber[index];
  console.log(`7.Element at even ${index} position:${number}`);
  }   
  
 }
console.log(`================Odd index value in given array ==========`);
 for (let index = 0; index < arrayOfNumber.length; index++) {
  if(index%2!=0)
  {
  const number = arrayOfNumber[index];
  console.log(`8.Element at odd ${index} position:${number}`);
  }   
//   console.log(`$`);
 }

 console.log(`=====sum of element in an array===========`);
 let sumOfNum=0;
 for (let index = 0; index < arrayOfNumber.length; index++) {
    const element = arrayOfNumber[index];
    sumOfNum=sumOfNum+element;
    
 }
 console.log(`9.Sum of element in an array:${sumOfNum}`);
 console.log(`==========number which are multiple of 5===============`);
 for (let index = 0; index < arrayOfNumber.length; index++) {
    if(index%5==0)
    {
    const number = arrayOfNumber[index];
    console.log(`10.Element multiple of five: ${index} position:${number}`);
    }
}
 let isavalable115=arrayOfNumber.includes(115);
 console.log(`11.Check the 115 number is in the array:${isavalable115}`);

 let isavalable23=arrayOfNumber.includes(23);
 console.log(`12.Check the 23 number is in the array:${isavalable23}`);

 console.log(`Insert 55 66 before index 3 using splice method=========`);
 arrayOfNumber.splice(3,0,55,66);
 console.log(`${arrayOfNumber}`);
  
 console.log(`Delete 3 element strating index 4`);
  let changeArray=arrayOfNumber.splice(4,3);
 console.log(`${arrayOfNumber}`);
 console.log(`${changeArray}`);
   