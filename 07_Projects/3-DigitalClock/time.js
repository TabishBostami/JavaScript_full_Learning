

function printTime(){
  const now = new Date();
  const timeString = now.toLocaleTimeString([]);
  const currTime = document.querySelector("#clock");
  
  currTime.innerHTML = timeString   
  
}

setInterval(printTime,1000)

