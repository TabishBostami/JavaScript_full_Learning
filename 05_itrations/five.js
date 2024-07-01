const coding = ['js','ruby','python','java','c++']

// <<<-------------- For each loop ------->>>>>

// coding.forEach( function (item){
//     console.log(item);
// } )


// coding.forEach( (item)=>{
//   console.log(item)
// } )

function printme(value,index,full_array){
  console.log(value,index,full_array);
}

coding.forEach(printme)

// output->
// js 0 [ 'js', 'ruby', 'python', 'java', 'c++' ]
// ruby 1 [ 'js', 'ruby', 'python', 'java', 'c++' ]
// python 2 [ 'js', 'ruby', 'python', 'java', 'c++' ]
// java 3 [ 'js', 'ruby', 'python', 'java', 'c++' ]
// c++ 4 [ 'js', 'ruby', 'python', 'java', 'c++' ]

const myCoding = [
  {
    languageName:"JavaScript",
    languageFileName:'js'
  },
  {
    languageName:"python",
    languageFileName:'py'
  },
  {
    languageName:"java",
    languageFileName:'java'
  }
]

myCoding.forEach((item)=>{
  console.log(item.languageName, item.languageFileName);
})