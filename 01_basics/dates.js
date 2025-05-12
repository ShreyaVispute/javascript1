// Dates

let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

console.log(typeof myDate);
let myCreatedDate = new Date(2025, 5 ,12) //months 0 se start hote hai
let myCreatedDate1 = new Date(2025, 0 ,13,6,3) 
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toLocaleString());

let createdate=new Date("01-14-2025")//yaha 1 is jan
console.log(createdate.toLocaleString());

let myTimeStamp = Date.now()
// 

//console.log(Math.floor(Date.now()/1000))

let newDate =new Date()
console.log(newDate.getMonth());//0 for jan
console.log(newDate.getDay());//0 for monday

//`${newDate.getDay()}`

newDate.toLocaleString('default',{
    weekday:"long",
    
})