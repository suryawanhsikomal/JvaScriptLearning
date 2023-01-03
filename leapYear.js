var leapyear=function(year){
    if (year%4==0 && year%100!=0 || (year%400==0)) {
        console.log(`${year} is leap year`);
    } 
    else
    {
        console.log(`${year} is  not leap year`);
    }
    
    }

leapyear(2000);
leapyear(1991);
leapyear(2014);
leapyear(2024);
leapyear(2025);