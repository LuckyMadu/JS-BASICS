const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

/* //can access all css styles
text.style.color = "red";
text.style.backgroundColor = "cyan";

//add class
text.classList.add("change"); */

//second func is called a callback func
changeColor.addEventListener("click", function() {
  //text.classList.add("change");
  text.classList.toggle("change");
});
