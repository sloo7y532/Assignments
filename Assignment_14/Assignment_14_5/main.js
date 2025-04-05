let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce((pre, cur) => {
  if (cur % 2 !== 0) {
    return pre + cur;
  } else {
    return pre * cur;
  }
}, 1);

console.log(result);
// 500
