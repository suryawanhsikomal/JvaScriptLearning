function countCharA(sentence) {
    

console.log(`I AM Learning JavaScript, The Language of Internet`);
// console.log(`My favorite Movie is LAggAn`);
var counter=0;
for (let index = 0; index < sentence.length; index++) {
    var char=sentence.charAt(index);
    // var charCopy=char.toLowerCase();
    if (char=='a' || char==`A`) {
        console.log(`${char}`);
        counter=counter+1;
          
    }    
}
}
countCharA(` AM Learning JavaScript, The Language of Internet `);
console.log(`========================================`);
function countCharA(sentence) {
    

    // console.log(`I AM Learning JavaScript, The Language of Internet`);
    console.log(`My favorite Movie is LAggAn`);
    var counter=0;
    for (let index = 0; index < sentence.length; index++) {
        var char=sentence.charAt(index);
        var charCopy=char.toLowerCase();
        if (char=='a' || char==`A`) {
            console.log(`${char}`);
            counter=counter+1;
              
        }    
    }
    }
countCharA(`My favorite Movie is LAggAn`);