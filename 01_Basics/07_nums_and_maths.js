const score = 400; 
// console.log(score);//400

const balanace =  new Number(100);
// console.log(balanace)//[Number: 100]

// console.log(balanace.toString()); //100
// console.log(balanace.toString().length);//3
// console.log(balanace.toFixed(1)) //100.0

const newNumber = 123.39833
// console.log(newNumber.toPrecision(2));//1.2e+2 ---priority is given befor decimal values
// console.log(newNumber.toPrecision(3));//123
// console.log(newNumber.toPrecision(4));//123.4


const hundreds = 10000000;
// console.log(hundreds.toLocaleString());//10,000,000 --US standard
// console.log(hundreds.toLocaleString('en-IN'));//1,00,00,000 --Indian standard


// +++++++++++++++++++++++++ MATHS *****************************

// console.log(Math);//run this line into browser conosle to get all the math methods or functions

// console.log(Math.abs(-4));// 4 --It is return only positive value of input 
// console.log(Math.abs(4));// 4
// console.log(Math.round(3.43))// 3 it rounds the value
// console.log(Math.ceil(3.43));// 4 it returns ceiling value
// console.log(Math.floor(3.73)); // 3 it returns floor value

// console.log(Math.sqrt(144));
// console.log(Math.sqrt(145).toFixed(2))

// console.log(Math.min(2,4,6,3,6,5)); //2
// console.log(Math.max(1,3,6,8,9,15,17));//17

// ------important------

console.log(Math.random());

console.log((Math.random()*10) + 1);// some time it will give 0.01 then this +1 give assurity of minimum output value is 1.

const min =10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min+1)) + min );

