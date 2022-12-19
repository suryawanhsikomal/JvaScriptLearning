var votingEligibility = function(age){
    if(age<=0 || age>120 ){
        console.log(`Age value : ${age}, Invalid data`);
    }
    if(age>=18 && age<=120) {
        console.log(`your age is : ${age}, You can vote`);
    }
    if(age<18 && age>0){
        console.log(`your age is : ${age}, You can note vote`);
    }
}
votingEligibility(20);
votingEligibility(89);
votingEligibility(1500);
votingEligibility(0);

 console.log(`=================================================================================================`);

 console.log(`========grade system ass2========`);
var checkgrade = function(marks)
{
    if (marks>90 && marks<=100)
    {console.log(`fantastick marks ${marks} your grade is A+`);}
    if (marks>75 && marks<90)
    {console.log(`Excellent marks ${marks} your grade is A`);}
    if (marks>50 && marks<75)
    {console.log(`good  marks ${marks} your grade is B`);}
    if (marks>35 && marks<50)
    {console.log(` marks is  ${marks} your grade is C need to Improve`);}
    if (marks<35 && marks>0)
    {console.log(` marks is  ${marks} Soorry you are fail`);}


    if (marks<=0 || marks>100)
    {console.log(`Please provide valid marks  ${marks} `);}

}
checkgrade(98);
checkgrade(80);
checkgrade(90);
checkgrade(0);
checkgrade(150);
checkgrade(-7);
checkgrade(35);
checkgrade(29);
checkgrade(64);
checkgrade(49);