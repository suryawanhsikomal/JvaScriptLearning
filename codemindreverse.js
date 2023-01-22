let company = "Codemind Technology"
let revStr=""
let afterSplit = company.split(" ")
 for (let index = 0; index < afterSplit.length; index++) {
    const element = afterSplit[index];
 if(index==1){
    for (let index = element.length; index >= 0; index--) {
    revStr = revStr+element.charAt(index)
    }
  }
}
let result = afterSplit[0]+" "+revStr
 console.log(`   Before reverse: ${company}`);
 console.log(`   After reverse:  ${result}`);

