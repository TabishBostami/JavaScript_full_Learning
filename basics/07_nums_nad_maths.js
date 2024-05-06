const score = 400; 
console.log(score);//400

const balanace =  new Number(100);
console.log(balanace)//[Number: 100]

console.log(balanace.toString()); //100
console.log(balanace.toString().length);//3
console.log(balanace.toFixed(1)) //100.0

const newNumber = 123.39833
console.log(newNumber.toPrecision(2));//1.2e+2 ---priority is given befor decimal values
console.log(newNumber.toPrecision(3));//123
console.log(newNumber.toPrecision(4));//123.4
