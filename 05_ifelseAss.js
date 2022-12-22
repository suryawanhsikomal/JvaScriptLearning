var votingEligibility=function(age)
    {
        if (age<=0 || age>120) {
            console.log(`Invalide data:${age}`);
            
        } else {
            if (age>=18) {
                console.log(`Age is :${age} "you are eligible for voting"`);
                
            } else {
                console.log(`Age is: ${age}" sorry,you are enot eligible for voting"`);
                
            }
            
        }

    }
    votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);

console.log(`====================================================`);

var gradeCalculation = function(marks){
    if (marks==0 || marks<0 || marks>100 || (typeof marks)!="number") {
        console.log(` Mark is: ${marks} "Please provide valid data"`);
        
    } else {
        console.log(`valid data`);
       
        
    }
    if (marks>=90 && marks<100) {
        console.log(`Funtastic Marks :${marks} "your grade is A+"`);
        
    } else {
        if (marks>=75 && marks<90) {
            console.log(`Excellent marks: ${marks} "your grade is A"`);
            
        } else {
            if (marks>=50 && marks<75) {
                console.log(`Good marks: ${marks} "your grade is B"`);
                
            }
             else{
                if (marks>=35 && marks<50) {
                    console.log(`Marks is: ${marks} "your grade is C, Need Improvment"`);
                    
                } else {
                 
                    
                }
             }
                
            }
            
        }
        
    }


gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("eighty");