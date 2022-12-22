var monthOfYear = function(month) 
{
  switch (month) {
    case 1:
      console.log(`january`);
      console.log(` January is 1st month of year`);
      break;
    case 2:
      console.log(`February`);
      console.log(`February is 2nd month of year`);
      break;
    case 3:
      console.log(`March`);
      console.log(`March is 3rd month of year`);
      break;
    case 4:
      console.log(`April`);
      console.log(`Arpil is 4th month of year`);
      break;
    case 5:
      console.log(`May`);
      console.log(`May is 5th month of year`);
      break;
    case 6:
      console.log(`June`);
      console.log(`June is 6th month of year`);
      break;
    case 7:
      console.log(`July`);
      console.log(`July is 7th month of year`);
      break;
    case 8:
      console.log(`Agust`);
      console.log(`Agust is 8th month of year`);
      break;
    case 9:
      
      console.log(`Saptember`);
      console.log(`Saptember is 9th month of year`);
      break;
    case 10:
     
      console.log(`Octomber`);
      console.log(`Octomber is 10th month of year`);
      break;
    case 11:
      console.log(`November`);
      console.log(`November is 11th month of year`);
      break;
    case 12:
      console.log(`December`);
      console.log(`December is 12th month of year`);
      break;

    default:
      console.log(` ${month}Provided data is not valid`);
      break;
  }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);

