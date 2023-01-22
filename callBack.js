console.log("==========CallBack==============");

function add(diplay){
    let a=10;
    let b=20;
    let c;
    c=a+b;
    console.log("Addition od a & b is:",c);
    diplay();
} 
function swap(){
    let x=11;
    let y=21;
    let temp;
    console.log("before swapping: ", x ,y);
    temp=x;
    x=y;
    y=temp;
    console.log("After swapping: ",x,y);
}add(swap);


console.log(`=================================================================`);
console.log("Callback with arg functions");
let add = function (n1, n2){
    console.log(n1+n2);
}
let multiply = function (n1, n2){
    console.log(n1*n2);
}

function operation(callbackAdd, callbackMultiply) {
    console.log('operation');
    callbackAdd(5, 5);
    callbackMultiply(2, 2);
} 
operation(add, multiply);


