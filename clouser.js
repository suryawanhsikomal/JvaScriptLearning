let globalVariable = 100;
function outer(){ 
    let outerVariable = 200;
    let inner = function(){
        let innerVariable = 300;
        console.log("Inner function");
        console.log(globalVariable);
        console.log(outerVariable);
        console.log(innerVariable);
    }
    return inner;
}

let returnValue = outer();   //call outer whatever in inner fun get store in one variable
returnValue();
outer()();    //we can invoke inner function like this als0
