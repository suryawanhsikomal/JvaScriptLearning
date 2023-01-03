console.log(`=====shaloow cloning of an array====`);
const arrayNum=[20,3,4,56,90,400,49];
const clonearray1=arrayNum;
console.log(clonearray1);
console.log(arrayNum);
console.log(`=====after update arraynum display both array`);
arrayNum.push(55,66);
console.log(clonearray1);
console.log(arrayNum);    // both array get chnage
 console.log(`========================================================================`);

const arrayNums=[20,3,4,56,90,400,49];
console.log(`=====deep cloning of an array====`);
const clonAarray=[...arrayNums];
console.log(arrayNums);
console.log(clonAarray);
console.log(`====after update original one=====`);
arrayNums.push(10,25)
console.log(arrayNums);
console.log(clonAarray);   //only original array get change

console.log(`======Merge 2 arrays using conact========`);
const arrayEven=[2,30,14,8]
let mergeArray=arrayNums.concat(arrayEven);
console.log(`Merge arrayNums and arrayEven: ${mergeArray}`);

const employee_info={
    emp_id:27,
    emp_name:"john Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR",
    },
    address:{
        locality:{
            colony:"OM vridanta society",
            street:"kanch Pokali,431202",
        },
        city:"Mumbai",
        state:"Maharastra",
        country:"India"
    },
    mobile:["+91 9082 4623 40", "+91 9869 4851 42" , "+91 9082 4482 21"]
}
 const empAddress1=employee_info.address.locality;
 console.log(empAddress1); 
 console.log( employee_info.address.city);
 console.log( employee_info.address.state);
 console.log( employee_info.address.country);
 console.log(`${employee_info.emp_name} Mobile numbers are: ${employee_info.mobile[0]} ,${employee_info.mobile[1]},${employee_info.mobile[2]}`);
 

 console.log("===== Deep clone using JSON.stringfy ======");
 let  employee_info1=JSON.parse(JSON.stringify(employee_info))
 employee_info.salary.july_month="80,0000INR";
 console.log(employee_info);
 console.log(employee_info1);
 console.log(`Salary of john after deep clone using JSON: ${employee_info.salary.july_month}`);
 console.log(`Salary of john after deep clone using JSON: ${employee_info1.salary.july_month}`);




