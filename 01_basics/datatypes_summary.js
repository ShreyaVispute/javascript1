//Primitive

//7 types: String , Number , Boolean , null , undefined , symbol , BigInt

//Non-primitive (reference)
//array , objects , functions

//javascript is dynamically typed

const score=100
const scoreVal=100.3

const isLoggedin =false
const temp=null; //typeof = obj
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);

const bigNumber=234567897654324567890n;


//Non-primitives
const heros=["shaktiman","naagraj","doga"]
let myobj={
    name:"Shreya",
    age:20
}
console.log(myobj);

//function
const myfunction=function(){
    console.log("Hello World");
}

console.log(myfunction)

console.log(typeof score )
console.log(typeof scoreVal )
console.log(typeof isLoggedin )
console.log(typeof temp )
console.log(typeof userEmail )
console.log(typeof anotherId )
console.log(typeof bigNumber)
console.log(typeof heros )
console.log(typeof myobj )
console.log(typeof myfunction ) // function object

/**
 * non-primitive datatypes ka datatype is object
 */


// ****************************************************************************************

//Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename="abcxyz.com"
let anothername=myYoutubename
anothername="javascript"
console.log(anothername)
console.log(myYoutubename)

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne;

userTwo.email="user2@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

/**
 * Stack (Primitive) , Heap (Non-Primitive)
 * stack ke andar copy milti hai jisse original value directly change nhi hoti through another variable
 * heap ke andar direct refernce milta hai jisse se direct changes hote hai through another variable 
 */