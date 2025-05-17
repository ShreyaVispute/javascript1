// let myName="Shreya      "
// console.log(myName.truelength);

let myHeros=["Thor","Spiderman"]

let heroPower={
    thor:"Hammer",
    spiderman:"sling",

    getSpiderPower:function(){
       // console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
//injected new property in prototypr
Object.prototype.shreya=function(){
    //console.log(`shreya is present in all objects`);
    
}
//sirf array ko hi power mili hai obj ko nhi
Array.prototype.heyShreya=function(){
  //  console.log(`Shreya says hello`);
    
}
//heroPower.shreya()
//myHeros.shreya()
myHeros.heyShreya()
//heroPower.heyShreya()

//inheritance
const User={
    name:"chai",
    email:"chai@google.com"
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'JS assignment',
    fulltime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__= User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="ChaiAurCode      "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    
    console.log(`True length is: ${this.trim().length}`);

}
anotherUsername.trueLength()
"Shreya".trueLength()