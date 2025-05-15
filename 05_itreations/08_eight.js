const mynums=[1,2,3]

// myTotal=mynums.reduce(function (acc, currentval){
//     console.log(`acc:${acc} and current : ${currentval}`)
//     return acc+currentval
// },0)

//arrow function
const myTotal=mynums.reduce( (acc,curr)=>acc+curr,0)
console.log(myTotal);


const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:1999
    },
    {
        itemName:"data science course",
        price:12999
    },
]

const total=shoppingCart.reduce((acc,item)=>acc+ item.price,0)
console.log(total)