//stack(primitive type (like number,string,boolean)) ,Heap (Non-primitive(array,functions etc.))
const name ="susmita"
const repoCount=50

//console.log(name + repoCount +"value")  not a good syntax

console.log(`Hello my name is ${name} and my rop count is ${repoCount}`);//symbol lies side of the 1

const gameName = new String('susmita')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
const newString =gameName.substring(0,4)
console.log(newString);
const anotherString =gameName.slice(-8,4)
console.log(anotherString);

const newStringOne ="   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://susmita23b.com/susmita sain"
console.log(url.replace('23b','_'))


