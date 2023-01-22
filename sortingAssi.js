const array_roll_numbers=[113, 45, 56,11,32, 45, 109, 779, 56, 45];
console.log(`------------reverse the array--------`);
array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log(`--------------sort() the array----------------------`);
array_roll_numbers.sort();
console.log(array_roll_numbers);
console.log(`--------sort the array in asceding orser by custom logic--------`);
console.log(array_roll_numbers);
array_roll_numbers.sort((a, b)=>{
 return a>b ? 1: -1
});
console.log(array_roll_numbers);
console.log(`------find the gretest number from the array----`);
//  const greatestNumber=array_roll_numbers[length-1]
//  console.log(greatestNumber);
const greatestNumber=array_roll_numbers[array_roll_numbers.length-1];
console.log(`Greatest number in an array:${greatestNumber}`);
const small=array_roll_numbers.slice(0,1,9);
console.log(`Small number is an array: ${small}`);

console.log(`----------Array after deleting duplicate element----------`);
  const newSet=[... new Set(array_roll_numbers)];
  console.log(newSet);


  