//singleton when object is made from constructor -> object .create
//object.literals
const mySym=Symbol("Key1");
const JsUser={
    name:"Shubham",
    "fullName": "SS",
    [mySym]:"myKey1",
    age:18,
    location:"jaipur",
    email:"SS@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
//2 Mathod to access object element
console.log(JsUser.email);
console.log(JsUser["email"]);
//We cant acces fullname wqith . operator we ahve to use 2nd method only
console.log(JsUser["fullName"]);
//only way to access Symbol in object is
console.log(JsUser[mySym]);

//JsUser.email="SS@gpt.com"
//Object.freeze(JsUser)
//JsUser.email="SS@microsoft.com"
//console.log(JsUser)
JsUser.greeting=function(){
    console.log("HelloJs User");

}
JsUser.greetingTwo=function(){
    console.log(`HelloJs User ${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

