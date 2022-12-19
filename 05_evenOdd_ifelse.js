var evenOdd=function(num)
{
    if (typeof num=="number") {
        if (num%2==0) {
            console.log(`${num} is even`);
            
        }
        else
        console.log(`${num} is odd`);
    
        
    } else {
        console.log(`invalid data`);
        
    }

}
evenOdd(20);
evenOdd("komal");
evenOdd(-10);
evenOdd(0);
evenOdd(45);