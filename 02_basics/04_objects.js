const tinderUser=new Object()
tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false;

//console.log(tinderUser);
const regularuser={
    email:"Some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Shubham",
            lastname:"Ssss"
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname)
const obj1={1:"a",
    2:"b"
}
const obj2={3:"a",4:"b"}
const obj3={obj1,obj2}
//console.log(obj3);
const obj4=Object.assign({},obj1,obj2);
//console.log(obj4);
const obj5={...obj1,...obj2}
//console.log(obj5);
const users=[{
    id:1,
    email:"S@gmail.com"
},
{
idn:5
},
{}]
//console.log(users[0].email);
//console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//Destructuring of objects
const course={
    coursename:"Js in English",
    price:"1000",
    courseInstructor:"Shubham"

}
//course.courseInstructor
const {courseInstructor}=course
console.log(courseInstructor);
const {courseInstructor:instructor}=course
console.log(instructor);







