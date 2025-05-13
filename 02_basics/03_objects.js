//singleton =>constructor mrthod se obj banane par singleton create hota hai
//            but literal method se singleton create nhi hota
//Object.create=>constructor method


//object literals
const mySym = Symbol("key1")


const JsUser={
    name:"Shreya",
    "full name":"Shreya Vispute",
    age:20,
    location:"Nashik",
    [mySym]:"mykey1",//symbol
    email:"shreya@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//accessing object - 2 methods
console.log(JsUser.email);
console.log(JsUser["age"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser["mySym"]);

JsUser.email="shreya@microsoft.com"
console.log(JsUser.email);
Object.freeze(JsUser)
JsUser.email="shreya@paytm.com"
console.log(JsUser.email);
console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello Js USer");  
}
console.log(JsUser.greeting());

JsUser.greetingTwo=function(){
    console.log(`Hello Js USer, ${this.name}`);  
}
console.log(JsUser.greetingTwo());