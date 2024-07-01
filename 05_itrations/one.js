// Let's learn For loop

// Syntax of for loop:-

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

// <<<<<<<-------------------------------######--------------------------->>>>>>>>>>>>>>>>

// lets take example to print odd and even number to learn to this for loop

// Printing odd and even numbers from 1 to 10
// for (let number = 1; number <= 10; number++) {  // Loop from 1 to 10
//   if (number % 2 === 0) {  // Check if the number is divisible by 2 (even)
//       console.log(number + " is even");
//   } else {  // If the number is not divisible by 2, it is odd
//       console.log(number + " is odd");
//   }
// }

// Explanation:
// --> for (let number = 1; number <= 10; number++) initializes a loop that runs from 1 to 10.
// --> Inside the loop, if (number % 2 === 0) checks if the number is even.
// --> If the number is even, it prints the number along with the text "is even" using console.log.
// --> If the number is not even (i.e., odd), it prints the number along with the text "is odd" using  *......console.log.

// <<<<<<------------------------------########-------------------------->>>>>>>>>>>>

// nested loop

// Nested loops to create a multiplication table
// here we  print tables of 1 to 10

// for (let i = 1; i <= 10; i++) {  // Outer loop for rows
//   let row = '';  // Initialize an empty string for each row
//   for (let j = 1; j <= 10; j++) {  // Inner loop for columns
//       row += (i * j) + '\t';  // Multiply and append the result to the row string
//   }
//   console.log(row);  // Print the row
// }

// Explanation:

//--> Outer Loop (Rows): for (let i = 1; i <= 10; i++) iterates from 1 to 10. This loop represents the rows of the multiplication table.

//--> Inner Loop (Columns): for (let j = 1; j <= 10; j++) iterates from 1 to 10 for each iteration of the outer loop. This loop represents the columns of the multiplication table.

// -->Row String: Inside the outer loop, let row = ''; initializes an empty string for the current row.

// -->Multiplication and Concatenation: Inside the inner loop, row += (i * j) + '\t'; calculates the product of the current row and column indices (i * j), and appends it to the row string, followed by a tab character (\t) for formatting.

//--> Print Row: After the inner loop completes, console.log(row); prints the entire row.

// <<<<<<<<<<<<<<---------------------####################---------------------->>>>>>>>>>>>>>

//For array
// Here's a basic example of using a for loop to iterate over an array and print each element:

// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// Explanation:

// -->Array Definition: const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']; defines an array of fruits.
// -->Loop Initialization: for (let i = 0; i < fruits.length; i++) initializes the loop. Here, i is the loop counter, starting at 0 and incrementing by 1 until it reaches the length of the array (fruits.length).
// -->Accessing Elements: fruits[i] accesses the element at the current index i.
// -->Printing Elements: console.log(fruits[i]); prints the current element to the console.