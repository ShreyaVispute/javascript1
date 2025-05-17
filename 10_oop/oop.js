const user={
    username:"shreya",
    loginCount:9,
    signedIn:true,
    getUserDetails:function(){
        console.log("Got user details from db")
        console.log((`Username: ${this.username}`));
        
    }
}
// console.log(user.username)
// console.log(user.getUserDetails())

//constructor function
//const promiseOne=new Promise()

function User(username,loginCount,isLoggedIn){
    this.username=username //left side wala variable and right side wala jo value pass ki hai
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne=new User("Shreya",12,true)
const userTwo=new User("Chai",2,false)
console.log(userOne.constructor)
//console.log(userTwo)

/**
 * 
 */