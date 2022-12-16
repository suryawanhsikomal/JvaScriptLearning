 var greatestNum = function(num1,num2)
 {
    num1=10;
    num2=-10;
     var greatnum = (num1>=num2) ? `${num1} is greater number` : `${num2} is greter number`
     console.log(`${greatnum} among 10 and -10`);
       
     num1=800;
     num2=899;
     var greatnum = (num1>=num2) ? `${num1} is greater number` : `${num2} is greter number`
     console.log(`${greatnum} among 800 and 899`);
 }
 greatestNum()

 console.log(`=============================================================================`);
 
  var evenOrOdd = function(num){
  //  var  num=29
     var result = (num%2==0) ? `number is even` : `number is odd`;
     console.log(`${num}  ${result}`);
  
  }
evenOrOdd(29);
evenOrOdd(44);
evenOrOdd(0);
evenOrOdd(101);


 console.log(`=============================================================================`);
 var wordLength = function(string){
  var len= string.length;
   var tOrf = (len%2==0) ? "true" : "false";
   console.log(`Length of ${string} is ${string.length} and possible value ${tOrf}`);
  

 }
 wordLength(`javascript`);
 wordLength(`Developer`);
 wordLength(`Google`);
