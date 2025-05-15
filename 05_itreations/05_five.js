const coding=["js","ruby","py","cpp","java"]
// coding.forEach( function (item){
//     console.log(item);
    
// }  )

//arrow functiom
// coding.forEach( (item)=>{
//     console.log(item)
// } )

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const mycoding=[
    {
        langname:"javascript",
        langfile:"js"
    },
    {
        langname:"java",
        langfile:"java"
    },
    {
        langname:"python",
        langfile:"py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.langname)
})