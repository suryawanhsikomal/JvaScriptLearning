function book()
{
    console.log(" Book Name: THE POWER IS WITHIN YOU");
}
book()
function author()
{
    console.log(" Author: Louise Hay");
}
author()
console.log("========================================================================");
function personDetails(firstName, lastName, collegeName)
{
    console.log("First Name",firstName);
    console.log("Last Name",lastName);
    console.log("College Name:",collegeName);
}
personDetails("Komal","Suryawanshi","Karmveer Bhaurao Patil College");
console.log("========================================================================");

function swap_value(val1,val2){


console.log("Before swapping:",val1,val2);
var temp=val1;
val1=val2;
val2=temp;
console.log("After swapping:",val1 ,val2);
}
swap_value("Virat","Anushka");
swap_value(1000,2000)
console.log("========================================================================");

function addThreeValue(val1,val2,val3)
{
    var add;
    add=val1+val2+val3;
    console.log("Addition of three value is : ",add);
}
addThreeValue(10.23,600,40)
addThreeValue("hello","Good","Morning")

