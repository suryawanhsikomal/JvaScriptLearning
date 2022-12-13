var  stringTemplateAssig= function(company)
{
    console.log(`company name is: ${company}`);
    var hobby1="reading";
    var hobby2="travelling";
    var hobby3="craft";
    console.log(`My fist hobbie is:${hobby1} ,my second hobbie is:${hobby2} ,and my third hobbie is:${hobby3}`);
    var concatstring = hobby1 + hobby2 + hobby3;
    console.log(`concatinating th hobbies in a one string:${concatstring}`);

    var hobbie="reading,travelling,craft";
     var concatSpliString = hobbie.split(",");
     console.log(`Concat string get slit using split():${concatSpliString}`)

}
stringTemplateAssig(`My dream Company name is "TCS"`);