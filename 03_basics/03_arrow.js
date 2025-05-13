const user={
    username:"shreya",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }

}
//this=>refers to current context

// user.welcomeMessage();
// user.username="sam"
// user.welcomeMessage();
//console.log(this)

// function chai(){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username="shreya"
//     console.log(this.username)
// }
const chai = ()=>{
    let username="shreya"
    console.log(this)
}
//chai()

/**Arrow function */
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

//implicit return
const addTwo=(num1,num2)=> (num1+num2) //no need of return
/**
 * if we use {} we need to write return keyword
 * if we use () for implicit return we don't need to write return keyword
 */

console.log(addTwo(7,3))
//returning object in arrow function
const add2=(num1,num2)=>({username:"username"})
console.log(add2(2,4))

