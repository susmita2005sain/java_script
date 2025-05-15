/*let score = "33"  
console.log(typeof score);

let valueOfNumber = Number(score)// string is converted into the number

console.log(typeof valueOfNumber);// here 33 is pure number so it can be converted but 

*/

let score = "33abc"  
console.log(typeof score);

let valueOfNumber = Number(score)// string is converted into the number

console.log(typeof valueOfNumber);// here 33abc is not a pure number so it can be converted but show nan mean not a number 
                                  // on printing
console.log(valueOfNumber);

// "33" => 33
// "33" => nan
// true => 1; false =>0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 =>true; 0 =>false
//"" =>false
// "susmita" => truen


//********************* Operations **************************/


let value =3
let negValue =-value
console.log(negValue);

let str1 = "susmita"
let str2 = " sain"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2 + 2) //122  if we use paranthsis then 14
console.log(2 + 2 + "1")//41

console.log(+true)
 //console.log(true+)  this is error

 let a=3
 console.log(a++)
 console.log(++a)



 //****************************Comparison **************************/


 console.log("22"==22);// this will convert and then check
 console.log("22"===22); // this will check data type as well 

 /*console.log(null>0);
  console.log(null<0);
 console.log(null>=0);



 console.log(undefined>0);
 console.log(undefined<0);
 console.log(undefined>0);*/  //avoid these types of conversion k


 
 








