// *********************  Array *************************

const  myArr = [0,1,2,3,4,5,"Tabish"]
const myArr2 = new Array(1,2,3,4,5)

console.log(myArr2)  //[ 1, 2, 3, 4, 5 ]
console.log(myArr) // [ 0, 1, 2, 3, 4, 5, 'Tabish' ]

console.log(myArr[0]) //0
console.log(myArr[6]) //Tabish

// **********************   Array methods ******************************

const myArr3 = [1,2,3,4,5,6];
// myArr3.push(7)
// console.log(myArr3)
// myArr3.push(8)
// console.log(myArr3)
// myArr3.pop()
// console.log(myArr3)

// output

// push(7)
/*[
  1, 2, 3, 4,
  5, 6, 7
]
  // push(8)
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
 // pop()
[
  1, 2, 3, 4,
  5, 6, 7
]*/

// myArr3.unshift(7);
// console.log(myArr3) 

// unshift add the Element in start of the Array and shift all the Elements to its next indexe

// output
// [
//   7, 1, 2, 3,
//   4, 5, 6
// ]

// myArr3.shift();

// it is like pop but it remove the from the begnning 
// console.log(myArr3)

// console.log(myArr3.includes(4)); //It return boolen value if arry have that element the it will return True else False
// console.log(myArr3.indexOf(9)); //if not exist then it will return -1
// console.log(myArr3.indexOf(3)); //else it will the index of the element

const newArray = myArr3.join();
console.log(myArr3);
console.log(newArray);
console.log(typeof(newArray))

// So we can say that join() method coverts the array into string type 


// ******************************  slice and splice *******************************




