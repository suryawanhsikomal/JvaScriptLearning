var show = function()
{
    console.log("display name:");
}
 show();

 function mul(val1,val2)
{
  var result;
     var result = val1*val2;
    console.log("result:", result);
    return result;

 }
  var sub = function(num1,num2)
  {
     var result=num1 - num2;
    console.log("substraction is:",result)
    return result;
    
  }
   var result= sub(20,10)
//   result(100,50)
console.log("output:",result)


   var multiplyResult=  mul(2,3);
   var finalResult = multiplyResult + 100;
   console.log(finalResult)
