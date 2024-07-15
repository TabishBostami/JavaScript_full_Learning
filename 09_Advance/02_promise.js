const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls,cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promis consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2 resolved");
});

const promisethree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "tabish", email: "tabish@example.com" });
  }, 1000);
});

promisethree.then(function (user) {
  console.log(user);
});

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if(!error){
      resolve({username:"tabish",password : "123"})

    }else{
      reject('ERROR:Something went wrong')
    }
  }, 1000);
});

