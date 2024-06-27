// iife - it is stands for Immediately Invoked Function Expressions

//generally is want to invoke a fucntion we can write like this 

function guitar(){
  console.log("guitar is playing.")
}
// guitar();

//but there specialise way to do tha

//syntax :- (bind you function here)();

// (function guitar2(){
//   console.log("guitar is playing.");
// })()

 //TypeError: (intermediate value)(...) is not a function
//  it is givinig error to solve this you must add semicolon(;) at the end of function
//because without ; it can't know about where have end its scope

// (function drum(){
//   console.log("drum is playing.");
// })()


//This is correct way

//this is named iife
(function piano(){
  console.log("piano is playing.");
})(); //piano is playing.
 
// you can also use arrow function
(()=>{
  console.log("flute is playing.");
})(); //flute is playing.

// And now everything is okay now
//paramiterise iife
((name)=>{
  console.log(`flute is playing by ${name}.`);
})("Tabish"); // flute is playing by Tabish.