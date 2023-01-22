// var num=2;
// // var prime=true;
// if(num<0)
// {
//     console.log(`Given number is not valid`);
// }
// for(i=2;i<num;i++)
// {
//     if(num%i==0)
//     {
//         console.log(`Number is not prime`);
//         break;
//     }
//     else
//     console.log(`number is prime`);
//     break;
// }


var num=7;
var prime=true;
if(num<=0)
{
    console.log("not valid number");

}
 else if(num>1) {
for(i=2;i<num;i++){
    if(num%i==0)
    {
      prime=false;  
    }
}
    if(prime)
    {
        console.log(`Given mumber  is prime number`);
    }
    else{
        console.log(`Given number is not prime number`);
    }
}
else{
    console.log(`given number is neighter perime number nor composite number`);
}
