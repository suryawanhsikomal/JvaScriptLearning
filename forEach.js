console.log(`===============forEach loop with  3 arguments (currentValue,index,array)=========`);
const arrayOfNum = [ 12, 21,32,45,66,47]
arrayOfNum.forEach(function(currentValue, index, array){
 console.log(currentValue ,index ,array);
});

console.log(`===============forEach loop with  with "currentValue" agrgument=========`);
arrayOfNum.forEach(function(currentValue){
    console.log(currentValue);
   });

 console.log(`===============forEach loop with arrow function=========`);
   arrayOfNum.forEach((currentValue) =>{
    console.log(currentValue);
   });
 console.log(`=============Using forEach loop  print even numbers fron an array===========`);
   const array=[91,21,15,5,6,2,14,2,6]
   console.log(array);
   array.forEach((currentValue) => {
     if(currentValue%2 == 0){
    console.log(currentValue);
     }
   });

   console.log(`=============Using forEach loop  print even index value fron an array===========`);
   const array1=[91,21,15,5,6,2,14,2,6]
   console.log(array1);
   array.forEach((currentValue,index) => {
     if(index%2 == 0){
    console.log("Index:", index +" " + "value:" + currentValue);
     }
   })