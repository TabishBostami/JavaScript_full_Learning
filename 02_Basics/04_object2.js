// const tinderUser = new Object()  **singleton object

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Tabish";
tinderUser.isLoggedIn = false;

// console.log(tinderUser) //output: { id: '123abc', name: 'Tabish', isLoggedIn: false }

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Tabish",
      lastname: "Bostami",
    },
  },
};
//console.log(regularUser)
/* output:     {        email: 'some@gmail.com',
                         fullname: { userfullname: { firstname: 'Tabish', lastname: 'Bostami' } }
                 }*/

// console.log(regularUser.fullname.userfullname.firstname,regularUser.fullname.userfullname.lastname) //Tabish Bostami

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

//const obj3 = {obj1,obj2}
// console.log(obj3) // {
//   obj1: { '1': 'a', '2': 'b', '3': 'c' },
//   obj2: { '4': 'd', '5': 'e', '6': 'f' }
// }

// const obj3 = Object.assign({},obj1,obj2) //syntax Object.assign(target,source)
// console.log(obj3)
// Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//This is spread operator
const obj3 = { ...obj1, ...obj2 };
//console.log(obj3) // output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// console.log(tinderUser); //{ id: '123abc', name: 'Tabish', isLoggedIn: false }
// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123abc', 'Tabish', false ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Tabish' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
// console.log(tinderUser.hasOwnProperty('isLogged')); //false

//************** Object Destructuring ********************

const course={
  coursename : "Js with Tabish",
  price : "999",
  courseInstructor :"Tabish"

}

//Normal method:
// console.log(course.courseInstructor) // Tabish


// Syntax:  const {name_of_key : aliasing} = Object_name
const {courseInstructor: instructor} = course
// console.log(instructor) // Tabish

