// if(condition){
//   your code
// }

// if(2===2){
//   console.log("exicuted")
// }

// some comparitive operators
// <, >, <=,>= , ==, !=, === , !==
// const temp = 42
// if (temp===42){
//   console.log('less than 50')
// }else{
//   console.log("greater than 50")
// }

//if if part is get false the else must be exicute.

// const score = 200
// if(score>100){
//   power = "fly"
//   console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)//this will out off scope of if block and can't access power

const balance =900

// if (balance>500) console.log("test"),console.log("test2");
//this is also a syntax to write in one line but this very bad practice never do this

// if (balance<1000) {
//   console.log("less than 1000")
// }
// else if(balance<750){
//   console.log("less than 750")
// }
// else if(balance<500){
//   console.log("less than 500")
// }
// else{
//   console.log("greater than 1000")
// }

const userLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true

if(userLoggedIn && debitCard){
  console.log("allwed to buy cousre")
}

if(LoggedInFromEmail || LoggedInFromGoogle){
  console.log("user Logged in");
}