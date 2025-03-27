let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

//method 1
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//method 2 => you should comment method 1 to see the output of method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
