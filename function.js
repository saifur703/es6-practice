function add(num1, num2 = '') {
  return num1 + num2;
}
console.log(add(5, 6));

function createUser(name, age = 18) {
  const user = {};
  user.name = name;
  user.age = age;
  return user;
}

console.log(createUser('Saifur'));
