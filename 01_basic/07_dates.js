// // // //dates
// // // let myDate=new Date()
// // // console.log(myDate.toString());
// // // console.log(myDate.toDateString());
// // // console.log(myDate.toISOString());
// // // console.log(myDate.toJSON());
// // // console.log(myDate.toLocaleString());
// // // console.log(myDate.toLocaleTimeString());
// // let mycreateDate=new Date(2025,0,23)
// // console.log(mycreateDate.toLocaleDateString())
// // 
// let myCreatedDate=new Date("01-14-2025");
// console.log(myCreatedDate);
// let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log( myCreatedDate.getTime());
// console.log( Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDate())

newDate.toLocaleString('default',{
    weekday:"long",
    
})