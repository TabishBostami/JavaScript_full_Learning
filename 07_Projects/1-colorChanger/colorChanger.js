const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    const color = e.target.id;

    switch(color) {
      case "grey":
        body.style.backgroundColor = color;
        break;
      case "blue":
        body.style.backgroundColor = color;
        break;
      case "yellow":
        body.style.backgroundColor = color;
        break;     
      default:
        body.style.backgroundColor = "white";  

    }
  });
});
