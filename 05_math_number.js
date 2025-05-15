//to fix a number = toFixed(2) 100.00 fixed precision value
// x.toprecise(3)
//y=100000 use y.tolocalstring()=10,00,000  or tolocalstring('en-IN')

//*************maths library in js ********************/

//cl(maths);
//math.abs(-4)=4
//math.round(4.3)=4
//math.ceil(4.2)=5 choose top value
//math.floor(4.9)=4
//math.min(4,5,6,7)  same max

//math.random()   values between 0 and 1
//to get integer value from the random

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)))  