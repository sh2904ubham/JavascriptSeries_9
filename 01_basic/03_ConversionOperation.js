let score="33abc"
let score1=null;
console.log(typeof score);
console.log(typeof(score))
let valueInNumber= Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber)
console.log(Number(score1))
console.log(typeof Number(score1))

//"33"=>33
//"33abc"=>NaN
//true=>1; false=>0
//undefined=>NaN ; null=>0
//but after conversion all type is Number value may be antyhing.
//bollean conversion 1=>true ; 0=>false 
//empty strings=>false;
// "shubham"=>true