// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
var index =0;
do {
    console.log(index);
    index++;
} while (index<=10);

// Print 70 to 7 by decrementing each time 7
 // 70  63  56  
var index =70;
do {
  console.log(index);
   index = index-7; 
} while (index>=7);

///continue
for (let index = 0; index < 6; index++) {
    //console.log(index); // 0 1  2 3
    if (index==3) {
      continue;
    }
    console.log(index);
 
 }
 