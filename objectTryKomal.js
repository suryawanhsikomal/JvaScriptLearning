const food = {
  dishName: "momos",
  price: 90,
  peice: 6,
  chart: {
    panipuri: 30,
    shevpuri: 40,
    dahipuri: 45
  },
  welcome: function () {
    let a=20;
    return a;
    // console.log(`Wlecome to  tretPoint shop`);    //add function in object
  }, sweet:{},
    
shop:["Zama","Bikaner","Gupta","Chotale","Baker's"]  
};
 console.log(`------------log an Object---------------------`);
console.log(food);

console.log(`----------------Typeof Object-----------------------`);
console.log(typeof food);

console.log(`-----------select any one propery n displayvalue-----------`);
food.type="steam Momos";
console.log(food);

console.log(`----------------------update -------------------------`);
food.price=80;
console.log(food);

console.log(`------------------update nested proprty------------------`);
food.chart.dahipuri=50
console.log(food);

console.log(`--------------delete nested property------------------------`);
delete food.peice;
console.log(food);

console.log(`------------find weather prperty isAvailable if yes then delete-------------`);
let isAvailable = "panipuri" in food.chart
if (isAvailable){
 delete food.chart.panipuri
 console.log(`panipuri chart delete succefully`);
}
else{
    console.log(`panipuri does not found in chart`);
}
console.log(`----------Accessing function from an object---------------`);
 const fun= food.welcome();
 console.log(fun);

console.log(`-------------------Accessing an array from an object------------------`);
 console.log(food.shop);

 console.log(`-----------concat two data member-----------------`);
 var offer =food.dishName + " " + food.price;
 console.log(offer);

console.log(`------------Get all the key of an Object in an array------------`);
 let key=Object.keys(food);
 console.log(key);

 console.log(`-----------Get all the value of an object in an array-----------`);
  let value=Object.values(food);
 console.log(value);

console.log(`--------------Trverse the object using forin Loop----------`);
 for (const key in food) {
   console.log("All keys of an object",key);
 }

console.log(`--------check if prperty is exist or not-------------`);
 for (const key in food) {
    if (Object.hasOwnProperty.call(food, key)) {
        const dishName = food[key];
        console.log("price propery is availabe in object:",dishName);
    }
 }

  food.sweet.chocolate = "fruit & nuts Chololate";
food.sweet.cake = "Mixed Fruit Cake";
food.sweet.special = "Rasmalai Cake";
console.log(food.sweet);
console.log(food.sweet.chocolate);