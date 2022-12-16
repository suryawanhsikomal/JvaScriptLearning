 var maleMarriageEligiblity = function(gender , age, boyName)
 {
    var result= (gender=="Male" && age>=21)? `Hey ${boyName} you are eligible for marriage` : `hey ${boyName}you are not eligible for marriage`
    console.log(`${result}`);
 }
maleMarriageEligiblity("Male",25,"BillGate");
 maleMarriageEligiblity("Male", 17,"Stew Jobs");

 console.log(`===========================================================================`);

 var femaleMarriageEligiblity = function( gender,age,girlName){

  var result =  (gender=="female" && age>=18)? `Hey ${girlName} you are eligible for marriage` : `hey ${girlName}you are not eligible for marriage`
  console.log(`${result}`);

 }
 femaleMarriageEligiblity("female", 16, "jenifer");
 femaleMarriageEligiblity("female" ,27,"Malinda Gates");
