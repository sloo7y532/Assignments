let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let letters = mix
  .map((e) => {
    return typeof e === "string" ? e : "";
  })
  .reduce((acc, e) => {//* another way is to use join(), but here he ask to not use join() 
    return acc + e;
  });

console.log(letters); // Output: Elzero
