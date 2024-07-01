const coding = ["js", "ruby", "python", "java", "c++"];

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item
// });
// console.log(values)//undefine

// here for each can't return so we cant use it for where we need return the value

// to solve this problem we will use filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
  return num > 4;
});
// console.log(newNums);

// Output-->
// [ 5, 6, 7, 8, 9, 10 ]

// we can also do with foreach loop

const newNums2 = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums2.push(num);
  }
});

// console.log(newNums2)

const books = [
  {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      publishYear: 1960,
      edition: 2015
  },
  {
      title: "1984",
      genre: "Dystopian",
      publishYear: 1949,
      edition: 2013
  },
  {
      title: "The Great Gatsby",
      genre: "Fiction",
      publishYear: 1925,
      edition: 2020
  },
  {
      title: "The Catcher in the Rye",
      genre: "Fiction",
      publishYear: 1951,
      edition: 2019
  },
  {
      title: "Moby Dick",
      genre: "Adventure",
      publishYear: 1851,
      edition: 2018
  },
  {
      title: "Pride and Prejudice",
      genre: "Romance",
      publishYear: 1813,
      edition: 2021
  },
  {
      title: "The Lord of the Rings",
      genre: "Fantasy",
      publishYear: 1954,
      edition: 2012
  },
  {
      title: "The Hobbit",
      genre: "Fantasy",
      publishYear: 1937,
      edition: 2011
  },
  {
      title: "Brave New World",
      genre: "Dystopian",
      publishYear: 1932,
      edition: 2020
  },
  {
      title: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      publishYear: 1997,
      edition: 2018
  }
];

// const userBooks = books.filter( (bk)=> bk.genre === 'Fantasy' )

const userBooks = books.filter( (bk)=> {
  return bk.publishYear >= 1960 && bk.genre ==="Fantasy"
})
console.log(userBooks)

