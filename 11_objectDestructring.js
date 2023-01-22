const person = {
    name: "Virat Kohli",
    age: 24,
    city: "Pune",
    pinCode: 431223,
    totalRun: 55000,
    isMarried: true
}
console.log(person);
// let pinCodeVirat = person.pinCode;
// let totalRunVirat = person.totalRun;
// let cityVirat = person.city;
let { pinCode, totalRun,  city, isMarried, wifeName="Anushka"} = person; // Object Destructuring 

console.log(pinCode, totalRun, city, isMarried, wifeName );
console.log(person);

console.log("------------Array Destructuring-------------");
const arrayCompany = ["TCS", "Infy", "Google", "Twitter", "Metaverse"];
let [ company1, company2, mad ] = arrayCompany; // Array Destructuring
console.log(company1,company2, mad);


// Self Invoking Function or IIFE - Immediately Invoked Function Expression

console.log("Self Invoking Function or IIFE - Immediately Invoked Function Expression");

(function show(){
    console.log("Bhar bhar ke likho");
})();
