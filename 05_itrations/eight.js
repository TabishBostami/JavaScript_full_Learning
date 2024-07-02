// <<<<<<---------------------Reduse----------->>>>>>>>>

const myNums = [1, 2, 3, 4, 5];

// const myTotal = myNums.reduce(function (acc,curVal){
//   console.log(`acc: ${acc} and curVal ${curVal}`)
//   return acc + curVal

// },2)

// console.log(myTotal)

// output:-

// acc: 2 and curVal 1
// acc: 3 and curVal 2
// acc: 5 and curVal 3
// acc: 8 and curVal 4
// acc: 12 and curVal 5
// 17

const myTotal = myNums.reduce((acc, curVal) => {
  console.log(`acc: ${acc} and curVal ${curVal}`)
  return acc + curVal;
}, 0);

console.log(myTotal)

// output:-acc: 0 and curVal 1
// acc: 1 and curVal 2
// acc: 3 and curVal 3
// acc: 6 and curVal 4
// acc: 10 and curVal 5
// 15