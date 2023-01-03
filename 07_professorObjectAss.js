const professor={
 degree:{
    enginering:"CSC",
    PHD:"ADV Computing",
    graduation:"IT",
    
  certificates:function(){
  console.log(`Certificates of professor`);
  }
      
  }

}
console.log(professor);
professor.name="Manjiri Jadhav";
professor.sub="IT"
professor.empId=100;
professor.salary=20000;
professor.age=30;
professor.gender="female";
console.log(professor);
console.log(`Include nested object "degree" in professor`);
console.log(professor.degree);
// console.log(`create nested "certificate object `);
var certificate=function(certificate1,certificate2)
{
console.log(certificate1);
console.log(certificate2);
}
certificate("haker rank particips()ation","IFC course")
professor.certificate
// console.log(professor.certificates);
console.log(professor);
console.log("======accessing onject proprty using dot======");
 const nameOfPro=professor.name;
 console.log(nameOfPro);
 console.log("==== add new property==========");
 professor.marriedstatus=true;
 console.log(professor);
 console.log("====update the proprty of object=========");
 professor.sub="CS";
 console.log(professor);
 console.log("=========Delete any centificate from nested object========");
 delete professor.certificates.certificate1;
 console.log(professor);
 professor.certificates.cetificate3="silver Light"
 console.log( professor.certificates);
 






