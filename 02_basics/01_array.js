//arrays
const myArr=[0,1,2,3,4,5]
//can be mix of datatypes
console.log(myArr[2]);
const myHeroes=["shaktiman","naagraj"]
const myArr2=new Array(1,2,3,4)
//Arrays methods
// myArr.push(6)
// myArr.pop();
// myArr.unshift(6)
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// const newArr=myArr.join();
// console.log(myArr)
// console.log(typeof newArr);
console.log("A ",myArr);
const myn1 =myArr.slice(1,3)
console.log(myn1)
console.group("B ",myArr);
const myn2=myArr.splice(1,3)
console.log(myn2)
console.log("C ",myArr);