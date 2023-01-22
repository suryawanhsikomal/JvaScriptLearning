class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil= new Employee(22, "Anil", "IT", 50000,"TCS");
const emp_radha=new Employee(33, "Radha","HR", 74000, "Wipro");
const emp_ridhi=new Employee(55, "Rishi", "Finance", 47000,"TCS");
const emp_sonali=new Employee(66, "Sonali", "Finance",45000,"Infy");
const emp_monika= new Employee(77,"Monika", "IT", 40000,"Wipro");
const emp_viny= new Employee(88,"Vinayak", "IT", 75000,"TCS");
const emp_mahi= new Employee(99,"Mahesh", "HR", 85000, "Infy");

const arrayOfEmployee =[emp_anil, emp_radha, emp_ridhi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`===========Employee Of TCS=======================`);
arrayOfEmployee.forEach((emp) =>{
   if(emp.emp_company == "TCS"){
    console.log(emp.emp_name, emp.emp_company);
   }
});

 console.log(`============Emplyee Who have salary greater than equal to 50000============`);
 arrayOfEmployee.forEach((sal)=>{
    if(sal.emp_salary>=50000){
        console.log(sal.emp_id, sal.emp_name, sal.emp_dept, sal.emp_company, sal.emp_salary);
    }
 });

 console.log(`=====Sum of all employee salary============`);
  var sum=0;
 arrayOfEmployee.forEach((sumOfSal)=>{
      sum = sum + sumOfSal.emp_salary;  //sum= sum+ i
    
 });
 console.log("Sum of all employee salary is: ",sum);

console.log(`===========Avarage of salary===========`);
  var length=arrayOfEmployee.length;
  console.log(`Length of an array:${length}`);
  let avarage= sum/length;
  console.log(`Avarage of salary: ${avarage}`);

  console.log(`========Emplyee detail having salary greater than eqaul to 50000 or department is HR and IT=================`);
  arrayOfEmployee.forEach((dept)=>{

    if((dept.emp_dept=="IT" && dept.emp_dept=="HR") || dept.emp_salary >= 75000){
        console.log(dept.emp_id, dept.emp_name, dept.emp_dept, dept.emp_company, dept.emp_salary);
    }
  });




