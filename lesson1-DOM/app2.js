const userList = document.querySelectorAll(".name-list li");

//console.log(userList);

for (user of userList) {
  user.addEventListener("click", function() {
    //console.log(this);
    this.style.color = "red";
  });
}
