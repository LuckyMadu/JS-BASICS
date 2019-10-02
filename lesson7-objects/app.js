const user = {
  name: "Lahiru",
  age: 20,
  married: false,
  hobbies: ["collect stamps", "reading books"],

  sayName: function() {
    console.log(this);
    console.log(this.name);
  }
};

//console.log(user.hobbies);

// function fruit() {
//   console.log("Apples");
// }
// fruit();

//This
//By default "this" keyword is refers to the window object
//console.log(this);

user.sayName();
//before . , we have a object, then THIS is refers to the user.

function myAge() {
  console.log(`My age is ${this}`);
}

myAge();
