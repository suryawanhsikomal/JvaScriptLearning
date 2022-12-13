function show()
{
    console.log("My college name: karmveer bhaurao patil college")
}
show();
function swapValue(value1, value2)
{
    console.log("Before swapping", value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After swapping", value1,value2);

}
swapValue(100,200)
swapValue("komal","suryawanshi")
swapValue(2,4)

var add = function(val1,val2){
    result=val1+val2;
    return result;
}
 var addition=add(10,10);
 console.log(addition);