// Array specific loops
//for of
//[" "," "," "]
//[{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
  //  console.log(num)
}

const greetings="Hello World!"
for(const greet of greetings){
   // console.log(greet)
}

//Maps=>key-value pair
const map=new Map()
map.set("IN","India")
map.set("US","United State of America")
map.set("Fr","France")
map.set("IN","India")

//console.log(map)

for(const [key,value] of map){
    console.log(key,":-",value)
}

const myobj={
    "Game1":"NFS",
    "Game2":"Spiderman"
}
//object is not iterable like this
// for(const [key,value] of myobj){
//     console.log(key,":-",value)
// }