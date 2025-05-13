//global scope
var c=300
let a=200


if(true){//block scope
let a=10
const b=20
var c=30
//console.log("Inner :",a)
}


 //console.log(a);
// console.log(b);
//console.log(c);

function one(){
    const username="Shreya"

    function two(){
        const website="Youtube"
        //console.log(username)
    }
    //console.log(website)
    two()
}
one()

if(true){
    const username="shreya"
    if(username === "shreya"){
        const website= " youtube"
        //console.log(username+website)
    }
    //console.log(website);
    
}
//console.log(username);

//+++++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++++++++
/**we can use funtion before it's declaration */
console.log(addone(5))
function addone(num){
    return num+1
}


//expression

/**can't use this type of function before it's declaration
 * here variable is holding a function
 */
addtwo(6)
const addtwo =function(num){
    return num+2
}
