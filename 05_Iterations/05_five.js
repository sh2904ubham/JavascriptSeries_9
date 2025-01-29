// //for each

const coding=["js","ruby","py","Cpp","java"]

// coding.forEach(function (item){
//   console.log(item);
    
// })
// coding.forEach((val)=>{
// console.log(val);

// })
function printMe(item)
{
    console.log(item);
    
}
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
// console.log(item,index,arr);

// })
const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:"JS"
    },
    {
        languageName:"JAVA",
        languageFileName:"Java"
    },
    {
        languageName:"Python",
        languageFileName:"Python"
    }
]
myCoding.forEach((item)=>{
console.log(item.languageName);

})
