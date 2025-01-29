const myNums=[1,2,3]
// const myTotal=
// myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
    
//     return acc+currval
// },0)

// const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal);

const shoppingCar=[
    {
        itemName:"JS",
        price:999
    },
    {
        itemName:"Python",
        price:599
    },
    {
        itemName:"JAva",
        price:5999
    },
    
]
const pricetoPay=shoppingCar.reduce((acc,curr)=> curr.price+curr,0

)
console.log(pricetoPay);
