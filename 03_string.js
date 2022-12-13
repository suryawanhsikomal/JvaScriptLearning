var greet="Good Morning";
console.log("Given string is",greet);
console.log("Total Charecter in the string:", greet.length);
console.log("Charecter at index 4:", greet.charAt(4))
console.log("Charecter at index 3:", greet.charAt(3))
var totalLength = greet.length;
console.log("Total Charecter:", greet.charAt(totalLength-1));


console.log("======== concat() ==========");
var firstName = "komal";
var lastName = "Suryawanshi";
// Concatenation using + operator 
var result = firstName + lastName;
console.log("Concatenation using + operator:", result);
var result = firstName.concat(" Suresh " ,lastName);
console.log("Concatenation using concat(): ", result);

console.log(`My first name is ${firstName} and last name is ${lastName}`);// string template with variable substitutaion

// console.log("good");


var greet="Good Morning";
 var indexOf= greet.indexOf('M')
 console.log("Index of chrecter M:",indexOf);

 var indexOfNin = greet.indexOf("nin");
console.log("Index of substring nin: ", indexOfNin);

var greet="Good Morning";
 var greetAfterReplace=greet.replace("Morning","Evening");
 console.log("replace substring:",greetAfterReplace)

  console.log(greet.replace("Mor","Eve"));

  console.log("upper case:",greet.toUpperCase());
  console.log("lower case:",greet.toLowerCase());


  var resultSlice= greet.slice(0,3);
console.log("result of slice:",resultSlice);
console.log("slice with start index:",greet.slice(4));
console.log("slice with negative start  index:",greet.slice(-7,-2));
console.log("slice with minus index:",greet.slice(-5));//count from end


// split function
var studentList="komal,Manjiri,Trupti,Swapnil";
 var studentListSplit=studentList.split(",");
 console.log("student list after split:",studentListSplit);
 console.log("Total Nyumber of students:",studentListSplit.length);

 var sentence="Hope for the best";
 var totalWords = sentence.split(" ");
 console.log("Total words in sentence:",totalWords.length);

 console.log(`You made my day "komal"`);

  var greet="       Good Morning       ";
  console.log("length",greet.length);
  var resultTrim =greet.trim();
  console.log("trim()",resultTrim, "Length:", resultTrim.length);



 