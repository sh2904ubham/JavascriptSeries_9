//# Primitive
//7 Types: String,Number, Boolean,null,undefined,Symbol,BigInt

//Non Primitive or Reference Types
//Arrays,Objects,Functions
//
const heroes=["shaktiman","naagraj", "doga"];
let myObj={
    name:"hitesh",
    age:22
}
const myFunc=function(){
    console.log("Hello World");
    
}
/////****** */
//stack(Primitive),Heap(Non-Primitive)
let myYouTubename="Shubham.com"
let anothername=myYouTubename;
anothername="chai"
console.log(myYouTubename);

console.log(anothername);
let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="Shubham@gm.com"
console.log(userOne.email);
console.log(userTwo.email);

