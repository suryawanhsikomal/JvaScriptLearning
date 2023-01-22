const array_numbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(array_numbers);                        //print the array

console.log(`======log the index & value using foreEach & arrowFunction=========`);
array_numbers.forEach((currentValue , index) =>{
    console.log(`Index: ${index} value: ${currentValue}`);   //log the index & value using foreEach & arrowFunction
});
  console.log(`=======Find the positive numbers from an array & log on console`);

  array_numbers.forEach((currentValue) =>{
      if(currentValue>0)
      {
        console.log(`Positive value is: ${currentValue}`);
      }
  });

  console.log(`=======Find the negative numbers from an array  & add in new array `);
  const negativeArray=[];
  array_numbers.forEach((currentValue) =>{
      if(currentValue<0)
      {
        negativeArray.push(currentValue);
        console.log(`Positive value is: ${currentValue}`);
      }
      
  });
  console.log(`===========Array of negative numbres===========`);
  console.log(negativeArray);

  console.log(`==========Find the even numbers using forEach and using arrow function========`);
 array_numbers.forEach((currentValue) =>{
   if(currentValue%2 == 0)
   {
    console.log(`Even numbers in given numres are: ${currentValue}`);
   }
 });

 console.log(`==========Sum of all elements in given array============`);
       sum=0;
 array_numbers.forEach((currentValue) =>{
    sum = sum + currentValue;  
 });
 console.log(`Addtion of all array element is: ${sum}`);

 console.log(`============Even positive number with index using forEach loop===========`);
 array_numbers.forEach((currentValue,index)=>{
    if(index%2==0)
    {
        console.log(`Positive index: ${index} value: ${currentValue}`);
    }
 });
  
