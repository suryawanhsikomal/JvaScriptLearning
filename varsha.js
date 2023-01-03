var eligiblity=function( name,gender,age)
{
    if (gender='male' && age>=21) {
    // console.log(` hello young mam you are eligible for marriage`); 
    console.log(`hello ${name}  your age is${age} you are eligible for marriage`); 
} else  if (gender='female' && age>=18)  
   
    {
        console.log(`hello ${name} lady you are eligible for marriage`);
    }
    else{
    console.log(`Sorry, ${name} you are not elegible for marriage`);
    }
}
  
   

eligiblity( "hitesh","male",17)
eligiblity("chetan","male",25)
eligiblity("varsha","female",28)
eligiblity("pooja","female",16)
// eligiblity("other",20)
// eligiblity("other",17)

console.log(`====== substrin method============`);
var str1="welcomein codemind";
var len=str1.length;
console.log(`length: ${len}`);
console.log(str1);
 var substr2=str1.substring(2,6);
console.log(substr2);
 var replaceStr=str1.replace("e","a"); //required varibale to replace 
                                   //  or we have to create new variable
console.log(replaceStr);
console.log(str1.replace("w","v"));
 var subStr1=str1.substr(2,6);
 console.log(subStr1);
 console.log(`=========using slice============`);
 var substr3=str1.slice(2,6);
 console.log(substr3);
 console.log(`==========valueof============`);
 var s1="check";
 var s1=new String(s1);
 console.log(typeof s1);
 console.log( typeof s1.valueOf()); 


 





