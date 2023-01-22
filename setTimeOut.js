function diplay(){
    console.log("======This is a set tiomout Function======");
    console.log("In function call it pass 2 values first is function name and second value is second");
}
setTimeout(diplay,1000);

console.log(``);

setTimeout(function showMsg(){
    console.log("======This is a another way to set the setTimeOut function========");
    console.log("here inside SetTimeOut  bracket we directly put Function");
},2000);