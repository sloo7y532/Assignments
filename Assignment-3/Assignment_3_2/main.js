let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + true + true + true); // 6

// Soultion Three
console.log(num * (true + true)); // 6

// Soultion Four
console.log((num * num * num - num) / (num + true)); // 6

// Solution Five
console.log((num * (true + true) * num) / num); // 6

// Solution Six
console.log(num * num - num); // 6
