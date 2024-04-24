let score = "43"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

/* Note- "33" => 33
      "33abc" => NaN
     "tabish" => NaN
        Null  => 0
    undefined => NaN
         true => 1
        false => 0
      */

let isLogedIn = 1

let boolenLogedIn = Boolean(isLogedIn)
console.log(boolenLogedIn) // true

isLogedIn = ""

boolenLogedIn = Boolean(isLogedIn)
console.log(boolenLogedIn) // false

isLogedIn = "tabish"

boolenLogedIn = Boolean(isLogedIn)
console.log(boolenLogedIn) //true

isLogedIn = "14112"

boolenLogedIn = Boolean(isLogedIn)
console.log(boolenLogedIn) //true

console.log("convert ... to String")

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber) // string
console.log(stringNumber) // 33