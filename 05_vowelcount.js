var sentence =`Never lose hope Everything will be fine`
//print the vowels  only(a e i  o u)
var counter=0;
for (let index = 0; index < sentence.length; index++) {
    var char=sentence.charAt(index);
    var charCopy=char.toLowerCase();
    if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u')
    // char=='A' || char=='E' || char=='I' || char=='O' || char=='U') 
    {
        console.log(char);
        counter = counter + 1;
        
    }
    
}

console.log(`total vowels in string is:${counter}`);

// reverce the string
var sentence =`Never lose hope Everything will be fine`
var reverceString="";
var  lastCharPosition = sentence.length-1;
for (let index= lastCharPosition; index >=0; index--) {
  
    var char= sentence.charAt(index)
    // console.log(char);
reverceString=reverceString.concat(char);
}
console.log(reverceString);

console.log(`==============================`);
var sentence = "Yes Just do it man, I know you can";
// initi   cond  update 
var reverseString = "";
 var lastCharPosition = sentence.length-1;
for (let index = lastCharPosition; index >= 0; index-- ){
     var char = sentence.charAt(index);
      reverseString = reverseString.concat(char);
     // console.log(char);
    
}
console.log(reverseString);

    
