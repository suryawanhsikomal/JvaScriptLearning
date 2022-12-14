var result=function(value){
    console.log(`Today's thought is: ${value}`);
    // length of string
    var line = value;
    console.log(`Length of given  string is:${line.length}`)
    //Find anf replace
    console.log(value.replace("Life","Day"));
    //using slice method
    var resultSliceWord= value.slice(1,5);
    console.log(`using slice method: ${resultSliceWord}`);
    console.log(`string in uppercase:${value.toUpperCase()}`);
    console.log(`String in lower case: ${value.toLowerCase()}`);
    // concatinate string
    var msg ="hello komal";
    console.log(msg);
    var concatinate = msg +" "+ value;
    console.log(`Msg to komal: ${concatinate}`);
    //incude method
    console.log(`include method it means in given sentence string is availabe or not:${value.includes("Life")}`)
    //split 
    var days ="sun,mon,tues,wedn,thus,fri,satur";
    console.log(days);
    var splitDay=days.split(" ");
    console.log(`days after split:${splitDay}`);
    







    
}
result(`Life is "Beautiful"`);