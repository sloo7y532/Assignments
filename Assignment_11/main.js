let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

do {
  if (typeof friends[index] == "string") {
    let friend = friends[index];
    if (!friend.startsWith("A")) {
      counter++;
      console.log(`${counter} => ${friend}`);
    }
  }
  index++;
} while (index < friends.length);
// Output
//"1 => Sayed";
//"2 => Mahmoud";
