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


var num=10;
var prime=true;
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
