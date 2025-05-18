const descriptor=Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)

const mynewobj=Object.create(null)
const chai={
    name:"ginger chai",
    price:250,
    isAvailable:true,
    orderChai:function(){
        console.log("Chai nhi bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
   // writable:false,
    enumerable:true//we can make it non iterable
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for(let [key,value]of Object.entries(chai)){
    if(typeof value!=='function'){
    console.log(`${key}:${value}`)
    }
}