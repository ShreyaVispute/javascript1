const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros)
console.log(marvel_heros.length)
console.log(marvel_heros[3][1]);

const mh=marvel_heros.concat(dc_heros);//concat will return new array
console.log(mh);

const all_heros=[...marvel_heros,...dc_heros]//spread
console.log(all_heros)

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=anotherarray.flat(Infinity)//depth
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"shreya"})) //intresting


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1 , score2,score3));
