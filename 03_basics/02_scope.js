let a=10
const b=20
var c=30
// console.log(a);
// console.log(b);
// console.log(c);
function one(){
    const username="Shubham"
    function two()
    {
        const website="YouTube"
        console.log(username);
        
    }
   // console.log(website);
    two();
}
one();

//Interestinf
addone(5)//This do not give error
function addone(num)
{
    return num+1
}

//addTwo(5)//This gives error
const addTwo=function(num)
{
    return num+2
}
