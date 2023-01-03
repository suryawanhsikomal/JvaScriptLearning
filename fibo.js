

console.log('Fibonacci Series:');
// 0 1 1 2 3 5 8 13 21
// 0 1 
// sum=0+1
// sum=1
// 0 1 1
// sum=1 + 1
// sum= 2
// 0 1 1 2
// sum= 2+1 
// sum =3
// 0 1 1 2 3
// sum =3
// sum= 3+2
// 0 1 1 2 3 5
// a b c
//   a b c
//     a b c
//     a=b
//     b=c
//     c=0
 var a=0,b=1, sum=0;

 console.log(a);
 console.log(b);
 for (let index = 0; index < 7; index++) {
     sum=a+b;
    console.log(sum);
    a=b;
    b=sum;   
 }

 console.log("=========diplay in  array=============");
   var a=0;
   var b=1; 
    var array=[0,1];
     var sum=0;
 for (let index = 0; index < 7; index++) {
     sum=a+b;
     array.push(sum);
    a=b;
    b=sum;   
 }
//  console.log(sum.push(sum2));
console.log(array);

