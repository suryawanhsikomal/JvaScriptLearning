const personalDetail={
    firstName:"komal",
    middleName:"suresh",
    lastName:"suryawashi",
    gender:"female",
    birthDate:21/01/1991,
    education:"BscIT",
    adress:"navi mumbai Juinagar",  
}
const collegeDetails={
    collegeName:"kbpcollege",
    location:"vashi",
    grade:"A+",
}
console.log(personalDetail);
console.log(collegeDetails);

Object.assign(personalDetail,collegeDetails);
//merge the personaldetails and college details object
console.log(`This is all about my deatils:`);
console.log(personalDetail);

const myFriends=["Manjiri","Trupti","Rahul","Swapnil","Vaibhav","Ankita","Payal"]
Object.freeze(myFriends);
console.log(myFriends);
for (const iterator of myFriends) {
    // console.log(`The friend in need is a friend indeed`);
    console.log(`My friend name is:${iterator}`);
}

function ReverseString(str) {
   return str.split('').reverse().join('')
} 
// Function call
// console.log("codemind");
console.log( "codemind" + " " + ReverseString("technology"))
 
console.log(`=========================================`);

var str = "Codemind Technology";
var a ="Technology";
res = "";
resarr = [];
for (i = 0; i < a.length; i++) {
  if (a[i] == " ") {
    res += resarr.reverse().join("") + " "; //res=res+resarr,reverse().join("")+ "";
    resarr = [];                             
  } else {
    resarr.push(a[i]);
  }
}
console.log(
  `*****************`
);
console.log(
  `6) The Given string company is ---> "${str}" from which Reversing Technology word ---> "${res}"`
);

 
