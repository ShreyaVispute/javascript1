const myobj={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    py:"Python"
}

for (const key in myobj) {
   console.log( `${key} shortcut is for ${myobj[key]}`);
}

const programming=["js","cpp","py","java"]
for(const key in programming){
    console.log(programming[key])
}

const map=new Map()
map.set("IN","India")
map.set("US","United State of America")
map.set("Fr","France")
map.set("IN","India")

for(const key in map){
    console.log(key);
}

//objects= for in
//array= for of