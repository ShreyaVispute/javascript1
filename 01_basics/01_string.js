const name="shreya"
const repocount=5

//older method for strings
console.log(name+ repocount +" Values")

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName=new String('shreya-av-pv')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.toUpperCase)
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('r'))

const newString=gameName.substring(0,4)//0 included 4 excluded
console.log(newString)

const anotherString=gameName.slice(0,4)
console.log(anotherString)

const anotherString1=gameName.slice(-8,4)
console.log(anotherString1)

const name1="         Shreya       ";
console.log(name1)
console.log(name1.trim());


const url="https://hitesh.com/hitesh%20choudhari"
url.replace('%20','-')
console.log(url)

console.log(url.includes('hitesh'))
console.log(url.includes('shreya'))

console.log(gameName.split('-',2));//seperator,limit
console.log(gameName.blink())