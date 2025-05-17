const promiseOne=new Promise(function(resolve,reject){
//do an async tasks
//DB calls,cryptography,network call
setTimeout(function(){
    console.log("Async task is completed");
     resolve()
},1000)
})

//consume promise
promiseOne.then(function(){
    console.log("Promise consumed");    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved!")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"shreya",password:"123"})
        }else{
            reject(`ERROR : Something went wrong`)
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
console.log(username);

}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    let error=true
    if(!error){
        resolve({username:"javascript",password:"123"})
    }else{
        reject("Error : JS went Wrong")
    }
    },1000)
});

async function consumePromiseFive(){
   try{
    const response = await promiseFive;
   console.log(response)
   }catch(error){
    console.log(error);
    
   }
}

consumePromiseFive()

// async function getALLUsers(){
//  try{
//     const response=await fetch("https://randomuser.me/api/")
//     //console.log(response)
//   const data=await response.json()
//   console.log(data)
//  }catch(error){
//     console.log("E:",error)
//  }
// }
//getALLUsers()

fetch("https://randomuser.me/api/")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})