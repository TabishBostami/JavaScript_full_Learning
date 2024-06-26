const user = {
  username :"tabsh",
  price: 999,

  welcomeMessage:function(){
    console.log(`${this.username}, welcome to website`)
  }

}
// user.welcomeMessage()
// console.log(this) // {}

// in node this give empty when we print it in global
// but in browser this give window as Object

const chai = () =>{
  let username="tabish bostami"
  console.log(username)//tabish bostami
  console.log(this)//{}
}
// chai()

//implicite return

const sum = (num1,num2)=> (num1+num2);

console.log(sum(3,5))