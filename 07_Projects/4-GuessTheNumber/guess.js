const answer = Math.round(Math.random() * 100 + 1);
console.log(answer);

const form = document.querySelector("form");

let num = 10;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if(num!=0){
      num=num-1;
      const guess = parseInt(document.querySelector("#guessField").value);
    const guessField = document.querySelector("#guessField");
    const guesses = document.querySelector(".guesses");
    const lastResult = document.querySelector(".lastResult");
    const lowOrHi = document.querySelector(".lowOrHi");
  
   
      if (guess === answer) {
        // console.log("your guess is correct");
        guesses.innerHTML = guess;
        lastResult.innerHTML = num;
        lowOrHi.innerHTML = 'Correct guess'
        setTimeout(()=>{
          location.reload();
        },3000)

      } 
      
      else if (guess > answer) {
        // console.log("your guess is higher than the answer");
        guesses.innerHTML = guess;
        lastResult.innerHTML = num;
        lowOrHi.innerHTML = 'High'
        
      } 
      
      else if (guess < answer) {
        // console.log("your guess is lower than the answer");
        guesses.innerHTML = guess;
        lastResult.innerHTML = num;
        lowOrHi.innerHTML = 'Low'
      } 
      
      else {
        lowOrHi.innerHTML="invalid input"
        guesses.innerHTML = guess;
        lastResult.innerHTML = num;
      }
      console.log(guess);
      guessField.value = "";
      
      // console.log(num)
    }

    if(num == 0){

      setTimeout(()=>{
        location.reload();
      },3000)
    }
    
    
  });
  

  