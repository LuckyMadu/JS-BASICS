const schedule = ["eat", "drink", "swimming"];

schedule.push("reading"); //add
console.log(schedule);

schedule.pop();//remove
console.log(schedule);

schedule.shift(); //remove first element
schedule.unshift("new on 1st"); // add to the begining of the array
console.log(schedule);


console.log(schedule.indexOf("drink")); //return element index
