//array

const myArr = [0,1,2,3,4,5,true,"shreya"]
console.log(myArr);


const myHeros =["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4);

//Array methods
myArr.push(6)
myArr.push('7')
myArr.pop()

myArr.unshift(0)
myArr.unshift(9) //starting mai insert karenge
myArr.shift()//starting ka element delete hoga
console.log(myArr)

console.log(myArr.includes(4));//ans in boolean
console.log(myArr.indexOf(0));
console.log(myArr.indexOf(-1));

const newArr=myArr.join()

console.log(myArr);//obj
console.log( newArr);//string

//slice , splice
console.log("A ", myArr);
const myn1=myArr.slice(1,3)//3 excluded
console.log(myn1);
console.log("B ", myArr);

const myn2=myArr.splice(1,3)//3 included
console.log(myn2);
console.log("B ", myArr);

// differnce between slice and splice
//  * splice use karne ke baadh original array mai changes hote hai
//  * wo specific portion jo splice se mila wo original array se hatt jata hai
//  * slice mai original array par koi farak nhi padta

