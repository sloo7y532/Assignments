function multiply(...args) {
  let result = 1;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "string") {
      continue;
    } else {
      result = result * Math.floor(args[i]);
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
