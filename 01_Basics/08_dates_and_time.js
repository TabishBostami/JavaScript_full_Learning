let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023,0,5);
// let myCreatedDate = new Date(2023,3,5,14,53,34) //(year,month,date,hours,minute,second)
let myCreatedDate = new Date("2023-12-23");

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp/1000)
// console.log(Math.floor(myTimeStamp/1000))
// console.log(myCreatedDate.getTime())
let newDate = new Date();

console.log(newDate.toLocaleString('default',{
  // weekday:"long",
  dateStyle:"full"
})) 
