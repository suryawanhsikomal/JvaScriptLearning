
// var first="";
// var second="";
// var third="";
// console.log("Length of an array: ", size);
// for (let i = 1; i < size; i++) {
//   if (myArray[i] > first) {
//     third = second;
//     second = first;
//     first = myArray[i];
//   } else if (myArray[i] > second) {
//     third = second;
//     second = myArray[i];
//   } else if (myArray[i] > third) {
//     third = myArray[i];
//   }
//   console.log("Third last element is:", third);
// }


// for (let i = 0; i < size; i++) {
//     for(j=i+1; j< size; j++){
//         if(myArray[i] > myArray[j]){
//             temp =myArray[i];
//             myArray[i]=myArray[j];
//             myArray[j]=temp
//         }
//     }
//      console.log("third largest number is:",myArray[size-3]);
// }

// function thirdLargest(myArray, size){
//     if(size < 3){
//         console.log("invalid input");
//         return;
//     }
//     var first = myArray[0];
//     for (let i =1 ; i  <  size; i++) {
//        if(myArray[i] > first)
//        first = myArray[i]  ;

//        var second = Number.MIN_VALUE;
//        for( i=1; i < size ; i++){
//         if(myArray[i] > second && myArray[i] < first)
//          second = myArray[i];

//          var third = Number.MIN_VALUE;
//          for(i=1 ;i< size; i++)
//          if(myArray[i] > third && myArray[i]  < second){
//          third = myArray[i];
        
//          }
        
//        }

//     }
//     console.log("third largest element is: ",  third);
// }

// thirdLargest(myArray, size);

const myArray = [21, 91, 15, 59, 5, 30];
console.log(myArray);
const size = myArray.length;

function largestThird(array){
   let first=0;
   let second = 0;
     let third = 0;
      for (let i = 0; i < size; i++) {
        let current= array[i];       //[21, 91, 15, 59, 5, 30];
        if(current > first)          //  21 >0    
        {
            third = second;   
            second = first;
            first = current;
        }
        else if(current > second ){
              third = second;
              second= current;
        }
        else if( current > third){
            third = current;
            
        }
        
      }
     return third;
}
 let thirdIs = largestThird(myArray);
 console.log(thirdIs);


