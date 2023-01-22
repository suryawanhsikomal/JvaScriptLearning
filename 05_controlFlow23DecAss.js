var sentence = "I am very good IT developer";
console.log(`I am very good IT developer`);
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
  var char = sentence.charAt(index);
  var charcopy = char.toLocaleLowerCase();
  if (
    char == `a` ||
    char == `e` ||
    char == `i` ||
    char == `o` ||
    char == `u` ||
    char == `A` ||
    char == `E` ||
    char == `I` ||
    char == `O` ||
    char == `U`
  ) {
    // console.log(char);
    counter = counter + 1;
  }
}
console.log(`total vowels in string is:${counter}`);
console.log(`=========================================================================`);
console.log(`Sum of cube of 1 to 5 numbers`);
var cube;
var sumOfCube=0;
for(i=1;i<=5;i++)
{
    cube=i*i*i;
    // cube=math.pow(i,3)
    
    sumOfCube=sumOfCube+cube;
    //sum=sum+i;       
}
console.log(`some of cube is:${sumOfCube} `);
console.log(`=========================================================================`);


 var oddPositionedChar=function(sentence){
  // console.log(`Soon I will be Angular IT champ`);
  // console.log(`Hard work always play back`);
  var a;
  a=sentence.replaceAll(" ", "");
  console.log(a);
  var final ="";
  for (let index = 0; index < a.length; index++) {
    var char=a.charAt(index)
    if(index%2!=0)
    {
    final=final+" "+char;
    }

  }
  console.log(final);
  

 }
 oddPositionedChar("Soon I will be Angular IT champ");
 oddPositionedChar("Hard work always play back");
 




  

 