var squareOfWordLength = function (strarg1, strarg2, strarg3) {
  console.log(strarg1);
  console.log(`length of javascript is:${strarg1.length}`);
  var squLength = strarg1.length * strarg1.length;
  console.log(`Square of length of string is:${squLength}`);
  console.log(`\n`);
  console.log(strarg2);
  console.log(`length of Google Crome is:${strarg2.length}`);
  var squLength = strarg2.length * strarg2.length;
  console.log(`Square of length of string is:${squLength}`);
  console.log(`\n`);

  console.log(strarg3);
  console.log(`length of Smart Developer is:${strarg3.length}`);
  var squLength = strarg3.length * strarg3.length;
  console.log(`Square of length of string is:${squLength}`);
};
squareOfWordLength("javascript", "Google Chrom", "Developer Smart");

console.log(`\n`);

var funExp = function () {
  var sentence = "I am Angular Developer";
  console.log(sentence);
  var sencLength = sentence.length;
  console.log(`Length of given string is:${sencLength}`);
    var wordCnt = sentence.split(" ")
    console.log(`split the string${wordCnt}`);
    var wordnum = wordCnt.length;
    console.log(` total number of word:${wordnum}`);
  console.log(
    `Result after dividing the total number of word to the length of string:${
      sencLength / wordnum
    }`
  );
  console.log(`Lenghth of string multiply by number of words:${sencLength*wordnum}`);
};
funExp()
