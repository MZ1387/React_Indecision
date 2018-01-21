class Person {
  constructor(name) {
    this.name = name;
  }

  getGreeting() {
    return `Hi ${this.name}`;
  }
}

const me = new Person('Mario');
console.log(me.getGreeting());
