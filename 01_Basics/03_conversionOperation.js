let score = "43"

// console.log(typeof score) //String
// console.log(typeof(score)) //String

let valueInNumber = Number(score)

// console.log(typeof valueInNumber) //number
// console.log(valueInNumber)  //43

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
// console.log(boolenLogedIn) // true

isLogedIn = ""

boolenLogedIn = Boolean(isLogedIn)
// console.log(boolenLogedIn) // false

isLogedIn = "tabish"

boolenLogedIn = Boolean(isLogedIn)
// console.log(boolenLogedIn) //true

isLogedIn = "14112"

boolenLogedIn = Boolean(isLogedIn)
// console.log(boolenLogedIn) //true

// console.log("convert ... to String")

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber) // string
// console.log(stringNumber) // 33



// ******************************************** Operation *******************************************


let value = 3 
let negValue =  -value
// console.log(negValue) //-3

// console.log(2+2);  //4
// console.log(2-2);  //0
// console.log(2*2);  //4
// console.log(2/2);  //1
// console.log(2**2); //4
// console.log(2%3);  //2


let srt1 = "hello " ;
let str2 = "Tabish"

let concat = srt1+str2
// console.log(concat)


// *Different ways of coversion and operations🤷‍♂️...!!

// console.log(1+"2")    //12
// console.log("2"+1)    //21
// console.log("1"+2+3)  //123
// console.log(1+2+"3")  //33
// console.log(1+"2"+3)  //123

// Boolean conversions ✔ => ❌

// console.log(true)   //true
// console.log(+true)  //1
// console.log(false)  //false
// console.log(+false) //0
// console.log(+"")    //0
// console.log(+"hi")  //NaN


// ************************ Post and PreFix Increments ***************************
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


// You can read more about conversons from here 👇

// click(Ctrl+ leftClick)
// https://tc39.es/ecma262/#sec-abstract-operations  

