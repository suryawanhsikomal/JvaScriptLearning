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
    
    const array_emps =[emp_anil, emp_radha, emp_ridhi, emp_sonali, emp_monika, emp_viny, emp_mahi];

     const wiproEmp = array_emps.filter((company)=>{
        return company.emp_company == "Wipro";
       
     });
      
     wiproEmp.forEach((element)=>{
         console.log("Employee from Wipro details:",element.emp_id,element.emp_name,element.emp_dept,
         element.emp_salary,element.emp_company);
     });

     console.log(`============================Emplyee from HR and IT department=======================================`);
      const iTAndHrArray=array_emps.filter((detail)=>{
             return detail.emp_dept  == "HR" || detail.emp_dept  == "IT";
                
     });
     iTAndHrArray.forEach((dept)=>{
        console.log(dept.emp_id, dept.emp_name, dept.emp_company,dept.emp_salary, dept.emp_dept);
    });

console.log(`===================Emplyee details whose Id is more than 50====================`);

const idArray1 = array_emps.filter((id)=>{
    return id.emp_id > 50;
});
idArray1.forEach((idArray)=>{
    console.log(idArray.emp_id,idArray.emp_name, idArray.emp_dept, idArray.emp_salary , idArray.emp_company);
});
console.log(`====================================================`);
const empFilter = array_emps.filter((letter)=>{
    if(letter.emp_name.startsWith("A") || letter.emp_name.startsWith("V") || letter.emp_name.startsWith("M")){
        console.log(letter.emp_id, letter.emp_name, letter.emp_dept, letter.emp_salary, letter.emp_company);
    }
});
const salArray=[];
array_emps.filter((sal)=>{
//  console.log(sal.emp_salary);
salArray.push(sal.emp_salary);    
});

// console.log(salarray);
let sumofsal =salArray.reduce((sum,value)=>{
    return sum+value;
});
console.log("============avg salary of all employee");
console.log("Avarage salary of all emplyees:",sumofsal/salArray.length);  
console.log(`===============================================`);
const iTArray=[];
const avgSalaryOfIt =array_emps.filter((dept)=>{
return dept.emp_dept=="IT";
});
avgSalaryOfIt.forEach(iTSal => {
    iTArray.push(iTSal.emp_salary);
});
let sumOfIt = iTArray.reduce((sum,value)=>{
    return sum +value;
});
console.log("Avarage salary of II department emplyee:",sumOfIt/iTArray.length);
 




 



