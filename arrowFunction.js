let arrowFun = ()=>
{
    console.log("=====This is program of arrowFunction with no argumet and no return value=====");
}
arrowFun();

let factorial = (num)=>{
    let fact=1;
    for(i=1;i<=num;i++)
    {
        fact=fact*i;
   
    }
    console.log(`Factorial Of ${num} is:${fact}`);
    
}
factorial(5);
factorial(6);
factorial(9);
factorial(12);

console.log("=======================================================");

let multiply=(n1,n2)=>{
    let mult=n1*n2;
    return mult;
}
 let multResult= multiply(10,10);
 console.log(multResult);