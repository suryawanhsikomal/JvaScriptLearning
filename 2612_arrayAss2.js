const fruit_sesonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`1.Given array is:`);
console.log(fruit_sesonal);
console.log(`========================================================`);

let fruitAtZeroIndex=fruit_sesonal[0];
console.log(`2.Fruit at zero index: ` + fruitAtZeroIndex);
console.log(`========================================================`);

let totalFruits=fruit_sesonal.length;
console.log(`length of array:` + totalFruits);
console.log(`========================================================`);

fruit_sesonal.unshift("papaya")
console.log(` 3.Add the papaya at start or before banana: `);
console.log(fruit_sesonal);
console.log(`========================================================`);

let indexOfmango = fruit_sesonal.indexOf("Mango");
console.log(`Index of element mango -->`+ indexOfmango);
fruit_sesonal.splice(3,1) //3 indicate index & 1 indicate number of element
console.log(`4.Remove the Mango from array:`);
console.log(fruit_sesonal);
console.log(`========================================================`);


fruit_sesonal.push("Pineapple");
console.log(`5.Insert Pineapple at the end of the array:`);
console.log(fruit_sesonal);
console.log(`========================================================`);


let indexofwatermelon=fruit_sesonal.indexOf("Water Melon");
console.log(`Index Of water melon is:`+indexofwatermelon);
fruit_sesonal.splice(4,0,"dragon Fruit")
console.log(`6.After inserting Dragon Fruit array will be:`);
console.log(fruit_sesonal);
console.log(`========================================================`);




console.log(`Before Repalcing Orange with kiwi array is:`);
console.log(fruit_sesonal);
let indexOfOranage=fruit_sesonal.indexOf("Orange")
console.log(`index of orange is:${indexOfOranage}`);
fruit_sesonal.splice(2,1,"kiwi")
console.log(` After Repalcing Orange with kiwi array is:`);
console.log(fruit_sesonal);

console.log(`=====================================================`);
console.log(` Given array:=---------->`);
console.log(fruit_sesonal);
 console.log(`${fruit_sesonal.splice(5)}`); ;
 fruit_sesonal.shift();
  // console.log(` After deleting First element:${afterdeleFirstValue}`);
  console.log(fruit_sesonal);



console.log(`========================================================`);


console.log(`Before removing element array is:`);
console.log(fruit_sesonal);
fruit_sesonal.splice(totalFruits-3);
console.log(`After removing last 3 element array is:`);
console.log(fruit_sesonal);






