const myArray = [9, 6, 4, 3, 2 ,5, 77];
function operation(evenCallBack, oddCallBack){
    myArray.forEach((element,index) => {    
        if(index %2 == 0){
            console.log(`the index of ${element} is ${index}`);
            evenCallBack(element);
        } 
        else{
            console.log(`the index of ${element} is ${index}`);
          oddCallBack(element);
        }
    });

}
var num=0;
function squarEven(element) {
    num= element* element;
    console.log(`the sqaure of: ${element} is ${num}`);   
}
 function cubeOdd(element){
     num  = element* element*element;
     console.log(`the sqaure of: ${element} is ${num}`);   
 }
operation(squarEven, cubeOdd)



