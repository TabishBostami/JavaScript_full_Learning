function sayMyName() {
  console.log("T");
  console.log("a");
  console.log("b");
  console.log("i");
  console.log("s");
  console.log("h");
}

// sayMyName()

function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}
// addTwoNumber(3,4) // 7
// addTwoNumber(3,"4") // 34
// addTwoNumber(3,"a") //3a

//Syntax
// function addTwoNumber(parameters){
//   console.log(number1 + number2)
// }

//Call fuctions Syntax
// functionName(arguments)
// Example : addTwoNumber(1,2)

// const result = addTwoNumber(2,3)
// console.log(result) //undefined
//because here fuction just print the value not return so to save this we have to return the result

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  console.log("sum ="); //sum =
  return result;
  console.log("Tabish bostami"); // this console.log will never exicute because return statement is       the  last statement of fuction.
}

// const result = addTwoNumbers(2, 4);
// console.log(result);

function loginUserMessage(username) {
  if (username === undefined) {
    return "Please enter user name";
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage())

//note:- in one fuction onlu one return can exicute then that fuction get termitnated

//one more technique to handle this is

function loginUserMessage2(username = "Tabish") {
  if (username === undefined) {
    return "Please enter user name";
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage2()); //Tabish
// console.log(loginUserMessage2("Bostami")); //Bostami

//here you can see that there I have used default paramiter which is Tabish and i prints when no argument is passes but when you pass a argument then that gargumnet will be the value of username

//here we gonna learn how to write a fuction which has not fixed number of parameters
function calculateCartPrice(...num1) {
  return num1;
}
// console.log(calculateCartPrice(200,400,233,235))// [ 200, 400, 233, 235 ]




//there one more things which programmers generally do

function calculateCartPrice2(val1,val2,...num1) {
  return num1;
}


//then lets what will be the output here

// console.log(calculateCartPrice2(200,400,233,235))//[ 233, 235 ]

//here you can see [233,235] only last two values return as a array rest or two are val1 = 200 and val2=400;



const user = {
  username : "tabish",
  price:199
} 

function handleObject(anyObjct){
  console.log(`username is ${anyObjct.username} and price is ${anyObjct.price?anyObjct.price:"Not available"}`)
}
// handleObject(user);

const myNewArray = [200,233,423,244]

function returnSecondVlaue(getArray){
  return getArray[1];
}
// console.log(returnSecondVlaue(myNewArray)); //233