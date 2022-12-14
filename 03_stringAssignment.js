var sentence = function(st)
{
console.log(st);
var result= st;
console.log(`1.Length of given string:${result.length}`);
var trimResult = st.trim();
console.log(`2.Sentence after trim:${trimResult}`);
// console.log(`After removing all black spaces legnth of dtring is:${trimResult.length}`);
console.log(`3.Length of string after trim:${trimResult.length}`);
console.log("4.Charecter at fist index:",trimResult.charAt(0)  , "Chrecter at last index:",trimResult.charAt(33));
// console.log("Charecter at fist index:",trimResult.charAt(0) , "Chrecter at last index:",trimResult.charAt(length-1));
var indexOfGood = st.indexOf("good");
// print the index of good string
console.log(`5.index of substring good :${indexOfGood}`);
// print the substring
 var slicestring= st.slice(22);
 console.log(`6.using slice fuction print the substring start index from 22:${slicestring}`);
 var subString = st.substr(22);
 console.log(`7.using substring fuction print the substring start index from 22:${subString}`);

//  check string end with key word up
console.log(`8.does given string end with up word using include():${trimResult.includes("up")}`);

console.log(`9.Check the  string star with word Hey after trimmimg using include():${trimResult.includes("Hey")}`);


}
sentence(`    Hey you are doing good, keep it up      `);

