const userEmail = "tabish@gmail.com"

if(userEmail){
  // console.log("got user email")
}
else{
  // console.log("Don't have user email");
}
//Here you can see that a string value is truthy value it returs true and empty string "" is falsy value

const marks = []
if(marks){
  // console.log("got Marks data")
}
else{
  // console.log("No marks found")
}

//but here in case of array you a empty array is also a truthy value and array with data is also truthy value.

// Let see list of truthy value and falsy value

// #>>>Falsy values<<<<#
//--->> false, 0, -0, BigInt 0n, "", null, undefined ,NaN
// these all are falsy value other than this all values are truthy values


// There are so many truthy values.. let some important truthy values
// --->> "0", "false"," ", [], {}, function(){}

if (marks.length === 0) {
  // console.log("arrya is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
  // console.log("Object is empty")
}
// if(Object.keys(emptyObj).length===0) -->> here Object.key(emptyObj)  provides array of keys of object so then we just use .length method to check the length of array and we easy find that this object is empty or not

// <----------Nullish Coalenscing Operator (??):null underfined-------->

let val1;


// val1 = 5 ?? 10;//5
// val1 = undefined ?? 15//15;
// val1 = null ?? 10;//10
// val1 = null ?? 10 ?? 15;//10
// console.log(val1)

// Explaination:- syntax - val1 = null ?? here may be value or fuctions,variables or data from api

// when you working with APIs then may be there you got null or undefined or error then you can use this Nullish Coalenscing Operator for handeling error put value what do you want at that time 

// <<-------------- Ternary Operater -------->>
// Syntax :- condition? true : false 

const iceCreamPrice = 100

iceCreamPrice <= 80 ? console.log("yes you can buy it"):console.log("Insufficient balance");

