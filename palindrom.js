let  str="MOM";
  let strEmpty="";

for (let index = str.length-1; index >=0; index--) {
         let char=str.charAt(index);
         strEmpty=strEmpty+char;
        
}
     console.log(strEmpty);
         if(str==strEmpty)
         {
            console.log(`Given string "${str}" is palindrom`);
         }
         else{
            console.log(`Given string "${str}" is not palindrom`);
         }


