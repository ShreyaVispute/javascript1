let score=true
console.log(typeof score);
console.log(typeof (score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber) //NaN - not a number

let isLoggedIn=""
let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

/**
 * conversion into Number
 * "33" =>33
 * "33abc"=>NaN
 * null => 0
 * undefined =>NaN
 * true=>1
 * false =>0
 * "sdfg"=>Nan
 */

/**
 * conversion into boolean
 * 1=>True
 * 0=>false
 * ""=>false
 * "dscf"=>True
 */

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

//*********************************OPERATIONS********************************
let value=3
let negValue = -value
console.log(negValue)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%3)

let str1 ="hello"
let str2= " Shreya"
let str3=str1+str2
console.log(str3)

console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
console.log("1"+2+2)//122
console.log(1+2+"2")//32
console.log((3+4)*5%3)
console.log(true)
console.log(+true)
console.log(true+2)
console.log(+"")

let gamecounter=100
gamecounter++
console.log(gamecounter);

let gamecounter1=100
++gamecounter1
console.log(gamecounter1);
