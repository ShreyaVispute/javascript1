const userEmail="s@gmail.com"
//string ke andar kuch hai toh truthy value agar empty string hai toh falsy value
//truthy
if(userEmail){
    console.log("got user Email")
}else{
    console.log("Didn't have user email")
}

//falsy
const userEmail1=""
if(userEmail1){
    console.log("got user Email")
}else{
    console.log("Didn't have user email")
}

/**
 * falsy value
 * false , 0 , -0 , BigInt 0n , "", null, undefined ,NaN
 */

/**
 * truthy value
 * true , 1 , "0" , "false" , " ",[],{},function(){} ->empty array, object , function
 */
userEmail3=[]
if(userEmail3.length==0){
    console.log("Array is Empty")
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}
console.log(false==0)
console.log(false=="")
console.log(""==0)

//Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10 //5
val1=null??10  //10
var1=undefined??15
//if value is null or undefined then second value is assigned
console.log(val1)
console.log(var1)

val2=null??10??20
console.log(val2)

//Terniary Operator 
/**syntax
*condition ? true :false
*/

const iceTeaPrice=100
iceTeaPrice>=80 ? console.log("more than 80") : console.log("less than 80")