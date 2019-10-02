const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", () => {
  //create an Li
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);

  //Add input value inside that new li
  newLi.appendChild(liContent);

  //Attach li to the list
  userList.appendChild(newLi);

});
