//generate hex decimal code for color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
//
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

const body = document.querySelector("body")
let colorChanger
const backgroundColor = function(){
  body.style.backgroundColor = randomColor()
}

start.addEventListener("click",function(){
  if(!colorChanger){
    colorChanger = setInterval(backgroundColor,1000)
  }
  
})

stop.addEventListener("click",function(){
  
  clearInterval(colorChanger)
  colorChanger = null;
})

