//singleton 
// we can create singleton object using constructor like (object.create) 


// but today we will create a Objects using LITERALS



// *******************  Objects Literals  *********************

const mySymbol = Symbol("symbol1");

const Jsuser = {
  name : "Tabish",
  "full name": "Tabish bostami",
  [mySymbol]:"myKey1",
  age : 24,
  location: "Bengaluru",
  email:"tabish.bostami042000@gmail.com",
  isLoggedIn: false,
  lastLoggedIn:["monday","tuesday","thursday"]

}

// 1st way to accesss objects
console.log(Jsuser.name); //Tabish

// but if you want to access full name here using this dot . notation you can't do this
// console.log(Jsuser.full name)❌

// then you have to use sqare bracket notation

console.log(Jsuser["full name"]) //Tabish bostami ✔
console.log(Jsuser[mySymbol])

// now let see how can we alter the data of keys of object

Jsuser.email = "tabish@chatgpt.com";
console.log(Jsuser.email)//tabish@chatgpt.com

// or else you want to nobody can change your object then yoy can freez the object ❄🥶❄
Object.freeze(Jsuser)

// now lets try to alter the data 

Jsuser.email = "tabish@microsoft.com";
console.log(Jsuser.email);//tabish@chatgpt.com