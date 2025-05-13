

function sayMyName(){
    console.log("S");
    console.log("R");
    console.log("H");
    console.log("Y");
    console.log("E");
    console.log("A");
}

sayMyName //reference
//sayMyName()//execution

// function addTwoNumbers(num1,num2){ //parameter (function definition)
//     console.log(num1+num2);
    
// }
function addTwoNumbers(num1,num2){ //parameter (function definition)
    // let result= num1+num2;
    // return result;
    
    return num1+num2
}
const result=addTwoNumbers(7,8)//arguments (function execution)
addTwoNumbers("f","5")
addTwoNumbers("6","5")
// console.log(result);

// console.log("Result :",result);

function loginUserMessage(username="sam"){
    if(username===undefined){ //(if(!username))
        console.log("Please enter username");
        return
        
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Shreya"))
console.log(loginUserMessage())//undefined

function calculateCartPrice(val1,val2,...num1){//rest operator
    return num1
}

console.log(calculateCartPrice(2,200,400,654,987))

const user={
    username:"Shreya",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username:"Sam",
    price:499
})

const myNewArray=[200,400,100,900]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,577,345,2345]));