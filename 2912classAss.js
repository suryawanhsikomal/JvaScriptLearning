class Vehicle{
    constructor(brand,fuelType,colour,wheeler,speed){
    this.brand=brand;
    this.fuelType=fuelType;
    this.colour=colour;
    this.wheeler=wheeler;
    this.speed=speed;
    }
}
let tataObject= new Vehicle("tata","disel","red",4,140);
let marutiObject= new Vehicle("maruti","petrol","black", 4,150);
let mahedraObject= new Vehicle("mahedra","disel","grey",4,130);
let nissanObject= new Vehicle("nissan","disel","brwon",4,140);
console.log(tataObject);
console.log(marutiObject);
console.log(mahedraObject);
console.log(nissanObject);

class College{
    constructor(uidNumber,name,location,grade){
        this.uidNumber=uidNumber;
        this.name=name;
        this.location=location;
        this.grade=grade;
    }
        details(){
        console.log(this.uidNumber,this.name,this.location,this.grade);
            
        }  
        
    }
let kpbCollege=new College("uid100","kbpcollege","vashi","A+");
let pccoecollege=new College("uid122","pccoe","pimpari","A+");
let jspmCollege=new College("uid221","jspm","wakad","A+");
kpbCollege.details();
pccoecollege.details();
jspmCollege.details();


console.log("=============================");
 function traverseObject(allCollege){
    for (const key in allCollege) {
        // if (allCollege.hasOwnProperty.call(allCollege, key)) {
            const element = allCollege[key];
            console.log(`${key} = ${element}`);
        // }
    }
 }
 traverseObject(kpbCollege);
 console.log("=============================");
 traverseObject(pccoecollege);
 console.log("=============================");
 traverseObject(jspmCollege);