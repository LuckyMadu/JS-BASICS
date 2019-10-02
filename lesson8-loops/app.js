const names = ["Lahiru", "Harry", "Potter", "Ron", "Ann"];

for (name of names) {
  console.log(`Hello ${name}`);
  if (name === "Ron") {
    console.log("Ron is great!");
    break;
  }
}
