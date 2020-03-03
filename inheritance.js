class Parent {
  constructor(fname) {
    this.fname = 'Full Mia';
  }
}

class Child extends Parent {
  constructor(name) {
    super();
    this.name = name;
  }
  getFullName() {
    return this.name + ' ' + this.fname;
  }
}

const child1 = new Child('Saifur');
const child2 = new Child('Shifiq');
const child3 = new Child('Monjur');
const child4 = new Child('Shukkur');

console.log(child1, child2, child3, child4);

console.log('\n');

console.log(child2.getFullName());
