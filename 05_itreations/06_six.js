// const coding=["js","ruby","py","cpp","java"]
// const values=coding.forEach((item)=>{
//     //console.log(item)
//     return item
// })
// //forEach does not return value

// console.log(values)

const mynums=[1,2,3,4,5,6,7,8,9]

//filter will return value
const newNums=mynums.filter((num)=>{
   return num>5
})
console.log(newNums)

//see the difference of scope {}
// const newNums1=mynums.filter((num)=>num>5)
// console.log(newNums1)


// const newnums=[]
// mynums.forEach((num)=>{
//     if(num>5){
//         newnums.push(num)
//     }
// })
// console.log(newnums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userbooks=books.filter( (bk)=>bk.genre==="History")

  const publish =books.filter((bk)=>bk.publish>=1995 && bk.genre==="History")

  //console.log(userbooks)
  console.log(publish)