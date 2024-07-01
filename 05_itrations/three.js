// <<<<<<<<<=---------for of loop--------=>>>>>>>>>

const arr = [1, 2, 3, 4, 5];

// for of loop

for (const num of arr) {
  // console.log(num);
}

const greeting = "Good Morning";
for (const greet of greeting) {
  // console.log(`Each char is ${greet}`);
}

// <<<<<<----------- Map ---------->>>>>>>

const map = new Map();
map.set("JH", "Jharkhand");
map.set("BR", "Bihar");
map.set("KR", "Karnataka");
map.set("DL", "Delhi");
map.set("DL", "Delhi");
map.set("BR", "Bihar");

// console.log(map)

// output -->
// Map(4) {
//   'JH' => 'Jharkhand',
//   'BR' => 'Bihar',
//   'KR' => 'Karnataka',
//   'DL' => 'Delhi'
// }

// so here we can clearly see that map print only unique key value pairs and maitain order of value entered
for (const [key, value] of map) {
  console.log(key,'-->',value);
  
}

const myObject = {
  'game1' : 'NFS',
  'game2' : 'GTA5',
  'game3' : 'PUBG'
}

// for (const [key, value] of myObject) {
//   console.log(key,'-->',value);
  
// } 

// output --> TypeError: myObject is not iterable

// here we have seen Objects are not ittrable ,Although it is possible but there is another way to ittrate objects.

