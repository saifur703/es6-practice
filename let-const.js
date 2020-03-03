/**
 * Constant
 */
const PI = 3.14159;
console.log(PI);

// cannot defined existing constant
// PI = 123;
// console.log(PI);

/**
 * Scope Variable
 */
let name = 'Saifur Rahman';
console.log(name);

let sum = 0;
for (var i = 0; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

let sum2 = 0;
for (let j = 0; j <= 10; j++) {
  sum2 += j;
}
console.log(sum2);

// console.log(j);

// Let is a scope variable.
