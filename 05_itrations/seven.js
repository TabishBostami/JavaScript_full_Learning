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
console.log(mul2)
