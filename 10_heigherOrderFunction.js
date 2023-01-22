// Higher Order Function - 
function anotherFunction(){
    console.log("I am inside another function....");
}
function show(myNumber){ // myNumber is an argument
    myNumber();
    let innerFunction = function(){
        console.log("Inner function.....");
     }
     return innerFunction;
}
 let inner = show(anotherFunction);
 inner();

 function abc(){
    console.log(`I am a first function`);
 } 
 function xyz(a){
    a();
     let innerA = function(){
         console.log(`I am  inside function xyz `);
     }
     return innerA;
 }
 let displayAll = xyz(abc);
 displayAll();
