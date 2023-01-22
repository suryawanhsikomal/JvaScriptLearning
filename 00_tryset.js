const set1=new Set()
set1.add("poonam");
set1.add("Pooja");
set1.add("Reshma");
set1.add("komal");
console.log(set1); // log on console

set1.delete("komal");
console.log(set1); 
console.log(` Length of set: ${set1.size}`);
var isavailable= set1.has("poonam");
console.log(isavailable);
set1.clear();

