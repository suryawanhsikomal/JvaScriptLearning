let greet = () => {
    console.log(`Good Afternoon, Today is Monday`);
}
greet();

console.log(`======Multiplication of 3 numbers using arrow function===========`);
let mult = (n1,n2,n3=1) =>{
 let multiplication =n1*n2*n3;
 console.log(`Multiplication of ${n1} , ${n2} and ${n3} is : ${multiplication}`);
}
mult(5,5,2);
mult(10,4)

console.log(`===========Addtion of 5 values using arrow function=============`);
let add =(n1,n2,n3,n4,n5) => {
    addition = n1 + n2 + n3 + n4 +n5;
    console.log(`Addtion of ${n1},${n2},${n3},${n4} and ${n5} is: ${addition}`);

}
add(100,100,200,349,756);
add("I am "," learning "," ES6 "," features ","in depth");