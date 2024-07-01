// Syntax

let count = 1; // Initialize the counter variable
while (count <= 5) {
  // Condition to be evaluated
  // console.log(count); // Code to be executed
  count++; // Increment the counter variable
}

// Explanation:

// -->Initialization: let count = 1; initializes the counter variable count to 1.

// -->Condition: while (count <= 5) checks if count is less than or equal to 5. If true, the loop body is executed.

// -->Loop Body: console.log(count); prints the current value of count.

// -->Increment: count++; increments the value of count by 1.

//-->Repeat: The loop condition is checked again. If it is still true, the loop body is executed again. This continues until the condition becomes false.

let myArray = ["Flash", "Batman", "superMan"];

let arr = 0;

while (arr < myArray.length) {
  // console.log(`value is  ${arr}`);
  arr++;
}

// <<------------DO While Loop-------->>>>>>>>>
let score = 11;
do {
  console.log(`score is ${score}`);
  score++;
} while (score <= 10);

// do while we use where exicution of loop atleat one time is necessary
// it first exicute the code then then check condintions

