var factorial=function(num)
{
    var fact=1;
    for (let i=num;i>0;i--) {
      fact=fact*i;
     
    }
    console.log(`Factorial of ${num} is :${fact}`);

}
factorial(12)
factorial(5)
factorial(7)
factorial(8);


