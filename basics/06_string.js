const name = "Tabish"
const age = 24;

console.log(`Hello my name is ${name} and my age is ${age}`);

const  gameName = new String('TabishBostami');

console.log(gameName[0]); //T
console.log(gameName.__proto__); //{} which is returns objects

console.log(gameName.length);//13
console.log(gameName.toUpperCase());//TABISHBOSTAMI
console.log(gameName.indexOf("B"));//6
console.log(gameName.charAt(4))//s

const newString =gameName.substring(0,5)
console.log(newString)//Tabis

const anotherString = gameName.slice(4,-2)
console.log(anotherString)//shBosta

const newStringOne = "    tabish     ";
console.log(newStringOne) //    tabish
console.log(newStringOne.trim()); //tabish


const url = "https://tabishbostami.com/tabish%20porfolio";
console.log(url.replace("%20","-")); //https://tabishbostami.com/tabish-porfolio

console.log(url.includes("tabish")) //true
console.log(url.includes("danish")) //false

const saparate = "tabish-bostami-is-a-web-developer";
console.log(saparate.split("-")); //[ 'tabish', 'bostami', 'is', 'a', 'web', 'developer' ]
console.log(saparate.split("-",3));//[ 'tabish', 'bostami', 'is' ]