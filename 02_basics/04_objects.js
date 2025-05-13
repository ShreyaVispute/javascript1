//const tinderUser = new Object() // singleton object
const tinderUser={} //non-singleton object

 tinderUser.id="abc123"
 tinderUser.name="Sam"
 tinderUser.isLoggedIn=false
 
//console.log(tinderUser);

/**Nested Object */
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Shreya",
            lastname:"Vispute"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname)

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"a",
    4:"b"
}
//Merging Object

//const obj3={obj1,obj2}

//const obj3=Object.assign(obj1,obj2)

//const obj3=Object.assign({},obj1,obj2) //merging object
/**empty object(braces) are added for guraented result 
 * if we wont do this then all values are getting stored in 1st object
 * so to avoid this and to store the merged object values into another object we use {} in the beggining
*/

const obj3={...obj1,...obj2}//spread
// console.log(obj3);
// console.log(obj1);

//array ke andar objects
const users=[
    {
        id:1,
        email:"s@gmail.com"   
    },
    {
        id:1,
        email:"s@gmail.com"   
    },
    {
        id:1,
        email:"s@gmail.com"   
    },
    {
        id:1,
        email:"s@gmail.com"   
    }
    
]
users[1].email
//console.log(tinderUser);

//when data is coming from database
// console.log(Object.keys(tinderUser)); //return array of keys
// console.log(Object.values(tinderUser));//return array of values
// console.log(Object.entries(tinderUser));//return array of key value pair's array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//too check this key is present or not

/**Destructuring of object */

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstrutor:"Hitesh"
}

//course.courseInstrutor

const {courseInstrutor : CI, price :P ,coursename:CN}=course
console.log(CI);
console.log(P);
console.log(CN);

/**same thing will get used in react 
 * some part of it=>
const navbar = ({company})=>{

}
navbar(company="Shreya")
 */

/**JSON */
// {   "name":"Shreya",
//     "coursename":"Js in Hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]