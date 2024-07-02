const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map((num) => {
  return (num = num + 10);
});

// console.log(newNums)
const mul = [];
const newNums3 = myNumbers.forEach((num) => {
  num = num * 10;
  mul.push(num);
});

// console.log(mul)
const mul2 = [];
for (let mul in myNumbers) {
  mul = myNumbers[mul] * 2;
  mul2.push(mul)
}
// console.log(mul2)

// let learn about chaining
// its mean we can use multiple methods or heigher order loop at once lets see with an example

const chainNum = myNumbers.map((num)=> num*10)
// console.log(chainNum) // Output-:
                      /* [ 10, 20, 30, 40,  50,
                         60, 70, 80, 90, 100  ]*/


const chainNum2 = myNumbers.map((num)=> num*10).map((num)=>num+2).filter((num) => num>= 42 )
// console.log(chainNum2) //output:-
                                    [
                                      42, 52,  62, 72,
                                      82, 92, 102
                                    ]

// step 1:- num * 10
// steo 2:- num+2
// step 3:- filter num>= 42

// so this way we can do chaining
