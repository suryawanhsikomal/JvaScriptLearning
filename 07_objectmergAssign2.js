const car={
    carName:"Creta SX",
    company:"Hundai",
    launchYear:2017
}
 const carEngin={
 enginePower:"1499CC",
 maxpower:"113 BHP"
}
console.log(car);
console.log(carEngin);
console.log(`====merge car  and carEngine object using assign operator====`);
Object.assign(car,carEngin);
console.log(car);

console.log(`====merge car and carEngin using spread(...) operator`);
let mergeCarDetail={...car,...carEngin};
console.log(mergeCarDetail);
