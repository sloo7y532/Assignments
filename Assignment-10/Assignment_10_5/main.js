let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let number = letter.length;
for (let start = letter.length; start < friends.length; start++) {
  let friend = friends[start];
  if (friend.startsWith(letter.toUpperCase())) {
    continue;
  } else {
    console.log(`${number} => ${friend}`);
    number++;
  }
}
/* 
Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/
