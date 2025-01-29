const myObject={
    js:"javaScript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
    
}
const programming=["js","rb","py"]
for (const key in programming) {
console.log(programming[key]);

}
// const map=new Map()
// map.set('IN',"India");
// map.set('USA',"United state of America");
// console.log(map);

// for(const key in map)
// {
//     console.log(key);
    
// }//not iterable