//const coding=["Js","ruby","Java","python","cpp"]
// const values=coding.forEach((item)=>{
// console.log(item);

// })
// console.log(values);//->undefined for each do not return any value
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=> {
    return num>4
})
console.log(newNums);
//if we use scope then we have to write return keyword and if we donot have scope the no need to write keywords
const newNums1=[]
myNums.forEach((num)=>{
    if(num>4)
    {
        newNums1.push(num)
    }
})
console.log(newNums1);

