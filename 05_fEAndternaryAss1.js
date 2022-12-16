 var select = function(gradeScore,hscScore,sscScore,candidateName)
 {
    var eligible=(gradeScore>=70 || hscScore>=80 || sscScore>=90) ? `Congrates, "${candidateName}" you are eligible for TCS interview` : `Unfortunate,"${candidateName}" you are not eligible for interview`;
     console.log(`${eligible}`);

 }
 select( 80,86,90,"komal suryawanshi");
 select(70,65,50,"trupti bhavke");
 select(60,79,88,"Rahul Yadav")