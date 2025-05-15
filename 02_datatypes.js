"use strict";

//trat all js code as newer version 

//alert("hello")// we are using node js not broweser

let name ="susmita"
let age=18
let isLoggedIn=false


//number=> 2 to power 53
// bigint (for large number)
//string => ""
//boolean => true/false
//null => standalone value
// undefined => 
//symbol => unique

//object

console.log(typeof "");//string
console.log(typeof null);//object
console.log(typeof undefined)//undefined


//use of symbol datatype

const id =Symbol('123')
const anotherId =Symbol('123')
console.log(id == anotherId)



const bigNumber = 34535321556599483924851950n  // we have to write n at the end of the number


//To write array

const heros =["afd","dsa","daa"]
let myObj ={
    name: "susmita",
    age: 20,
}
//to define function 
const myFunction = function(){
    console.log("Hello world");
}

myFunction();//calling of the function

