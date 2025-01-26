console.log("2">1);
console.log("02">1);
console.log(null>0);//false
console.log(null==0);//fasle
console.log(null>=0)//true
//The reason is that an equality check== and comparison><>=<= work differently.
//comaprioson convert null to 0 that why 3 is true and 1 is false 