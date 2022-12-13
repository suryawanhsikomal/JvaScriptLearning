 var square= function(num){
    console.log("Square of given number is:",num,"=",num*num);

 }
 console.log("Typeof function is:",typeof square);
 square(5);
 square(6);
 square(25);
 square(100);
 console.log("==========================================================================");
  var rect = function(length,width){
   console.log("Area of rectangle:",length*width);
  }
  rect(499,917)
  console.log("==========================================================================");

  var swapValues = function(value1,value2){
   console.log("Before swapping:", value1,value2);
   var temp=value1;
   value1=value2;
   value2=temp;
   console.log("After swapping:",value1,value2)
  }
  swapValues( "Virat","Anushka");
  swapValues(1000,2000);
  console.log("==========================================================================");
   
  
 
  var message=function(value)
  {
   console.log(value);
   var msg="JS the most popular language";
   console.log("Toatl Charecter available in the string:" ,msg.length);
   console.log("The Charecter at 6 index:",msg.charAt(6));
   console.log("The charecter  at 11 index:",msg.charAt(11));
   var totalLength = msg.length;
   console.log("last charecter:",msg.charAt(totalLength-1));
   console.log("First charecter of message:",msg.charAt(0));
   var squOfStringLength;
   squOfStringLength= totalLength*totalLength;
   console.log("Square of string lenghth:",squOfStringLength);
   
  }
  message("JS the most popular language");




  