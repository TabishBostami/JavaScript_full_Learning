let a = 10;
const b = 20;
var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

//there is no problem in accessing these three variables here but when use these in any scope like insde fuction of if else condtions then you get some access problems

if (true) {
  let d = 10;
  const e = 20;
  var f = 30;
}

// console.log(d); //d is not defined
// console.log(e); //e is not defined
// console.log(f); //30

//here you can clearly see that you can only access the var out of scope

// so that is why progammers generally avoid this var datatype

if (true) {
  const num = 20;
  // console.log(num);//20
}
// console.log(num); //ReferenceError: Cannot access 'num' before initialization
const num = 1000;
// console.log(num);//1000

// lets see for function


console.log(increment(9));//10
function increment(num){
  return num+1;
}
console.log(increment(9));//10


// console.log(numberInc(19))//Cannot access 'numberInc' before initialization
const numberInc = function(num){
  return num+1;
}

console.log(numberInc(19))//20

// so here we conclude that when you write a taditional function than you can access that before declearation but in 2nd fiction numberInc you can't these access these type of function before delcaration.
