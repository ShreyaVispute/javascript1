//if
const temperature=41
// if(temperature>50){
//     console.log("temperature less than 50")
// }
// else{
// console.log("inside else")
// }
// console.log("executed")

/**
 * operators that can be used in conditioanl statements
 * < , > , <= ,>= , == ,!= ,===,!==
 */

const score=200
// if(score>100){
//     const power="fly"
//     console.log(`user's power is to ${power}`)
// }
 //console.log(`user's power is to ${power}`)--error


//implicit scope - we don't use {} for scope it executes only single line we can add , for execution of next line
 const balance =1000
//  if(balance>500) console.log("test"), 
//  console.log("test2")
 
if(balance<500){
    console.log("less than 500")
}
else if(balance<750){
    console.log("less than 750")
}
else if(balance<900){
    console.log("less than 900")
}
else{
    console.log("less than 1200")
}

const isUserloggedIn =true
const debitCard =true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(isUserloggedIn && debitCard){
    console.log("Allowed to buy course")
}

if(loggedInFromEmail || loggedInFromEmail){
    console.log("User logged in")
}