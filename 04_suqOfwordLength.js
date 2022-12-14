var squareOfWordLength = function(strarg)
{
    console.log(`1.Stribg is:${strarg}`);
    // console.log(strarg.length)


    var lenstring = strarg.length;
    console.log(`2.Length of string is:${lenstring}`);
    

    var squString = lenstring * lenstring;
    console.log(`3.Square of length of string is:${squString}`);
    console.log(`\n`);
      
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrom");
squareOfWordLength("Developer Smart");

var funExp = function(){
     var sentence ="I am Angular Developer";
     console.log(sentence);
     var sencLength= sentence.length;
     console.log(`Length of given string is:${sencLength}`);
    //   var wordCnt = WordCount(sentence);
    //   console.log(`Total Number of word${wordCnt}`);
    console.log(`Result after dividing the total number of word to the length of string:${sencLength/4}`);

     console.log(sentence.split(","));


}
funExp()