function sayMyName(){
console.log("S");
console.log("H");
console.log("U");
console.log("B");
console.log("H");
console.log("A");
console.log("M");
    console.log("S");
}
//sayMyName-reference
//sayMyName()//execute
// function addTwoNumbers(number1,number2)
// {
//   console.log(number1+number2);
    
// }
//addTwoNumbers(3,4);
//addTwoNumbers(3,"4");
//addTwoNumbers(3,null);
//addTwoNumbers("a",4);
// const result=addTwoNumbers(3,5);
// console.log("Result",result);
function addTwoNumbers(number1,number2)
{
  let result=number1+number2;
    return result;
}
const result=addTwoNumbers(3,5);
//console.log("Result",result);

function loginUserMessage(username)
{
    return `${username} just logged in`
}
//console.log(loginUserMessage());
function calculateCartPrice(...num1)//rest operator
{
  return num1;
}
console.log(calculateCartPrice(200,400,500,200,"abc"));
const user={
  username:"hitesh",
  price:199
}
function handleObject(anyObject)
{
console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user);
handleObject({
  username:"Sama",
  price:499
})
 


