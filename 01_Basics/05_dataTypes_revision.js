//There are 7 Primitive Data types

// 1-String ,2-Number ,3-Boolean ,4-null ,5-undefined, 6-Symbol, 7-BigInt.



// Reference (Non -Primitive)

//Array, Object, Functions

//JavaScript is Dynamicly typed language


const outSideTemp = null;
let userEmail;

const id =  Symbol('123');
const anotherId = Symbol('123')

// console.log(id === anotherId); //false

const bigNumber = 234123413412232123423232323211n;
// console.log(typeof(bigNumber))


const hero =["shaktiman", "naagraj", "doga"]   

let myObj={
  name :"Tabish bostami",
  age: 24,
}

const myFunction =function(){
  // console.log("hello world");
}

// console.log(typeof anotherId);

//lets talk about mermories.............
// STACK AND HEAP 

//Stack(PRIMITIVE), Heap(Non-Primitive) 

var myYoutubename = "Tabish";
var anotherName = myYoutubename;

anotherName = "tabish bostami"
console.log(myYoutubename);
console.log(anotherName);


let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}
  


let userTwo = userOne;
userTwo.email = "tabish@google.com"

console. log (userOne.email);
console. log (userTwo.email);