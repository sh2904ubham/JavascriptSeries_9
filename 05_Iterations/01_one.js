
// const array=[10,20,30,40,50]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
    
// }
const array=[10,20,30,40,50]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element==20)
    {
        continue
    }
    if(element==50)
    {
        break;
    }
    console.log(element);
    
}