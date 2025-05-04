const userEmail="SS@gmail.com"
if(userEmail)
{
    console.log("GOt user email");
    
}
else{
    console.log("No");
    
}
//falsy values
//false,0,-0,0m,""",null,undefined,NaN
//truthy
//"0",'false' " ",[],{},function(){}
const emptyOj={

}
// if(userEmail.length===0){

// for array}

//for object
if(Object.keys(emptyOj).length===0)
{
    console.log("Object");
    
}
//Nulllish Coalescing Operator(??): null defined
let val1;
//val1=5??10
val1=null??10

console.log(val1);
//Ternary Operator
const iceTeaPrice=100
iceTeaPrice>=80?console.log("less than 80"):console.log("more than 80");
;

