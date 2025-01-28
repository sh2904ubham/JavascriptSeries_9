// const user={
//     username:"shubham",
//     price:99,
//     welcomeMessage: function()
//     {
//         console.log(`${this.username},welcome to website`)
//         //console.log(this);
        
//     }
// }
// // user.welcomeMessage()
// //  user.username="Sam"
// //  user.welcomeMessage()
// //console.log(this);
// // function chai()
// // {   let username="Shubham"
// //     console.log(this.username);
// // }
// // chai()
// // const chai=function(){
// //     let username="Sh"
// //     console.log(this.username)
// // }
// // chai()
// //Arrow Function
// // const chai=()=>{
// //   let username="Sh"
// //   console.log(this.username);
// //   console.log(this);
    
// // }
// // chai()

// const addTwo=(num1,num2) =>{
// return num1+num2
// }
// console.log(addTwo(3,4));

//Implicit return
const addTwo=(num1,num2)=> num1+num2;
const addThree=(num1,num2)=>(num1+num2)
console.log(addThree(3,4));
