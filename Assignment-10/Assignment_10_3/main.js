let start = 1;
let end = 6;
let breaker = 2;

for(let i = start ; i <=end ; i++){
    console.log(i);
  for(let j = breaker ; j < end - start ; j+=2){
    console.log("-- ",j);
  }
}
/* Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4 */