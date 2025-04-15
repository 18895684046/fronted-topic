// --------------------------------------------------------分割线---------------------------------

class Person {
    constructor() {
      // 添加到this 的所有内容都会存在于不同的实例上
      this.locate = () => console.log('instance', this);
    }
    // 定义在类的原型对象上
    locate() {
      console.log('prototype', this);
    }
    // 定义在类本身上
    static locate() {
      console.log('class', this);
    }
  }
  let p = new Person();
  p.locate(); // instance, Person {}
  Person.prototype.locate(); // prototype, {constructor: ... }
  Person.locate(); // class, class Person {}

// --------------------------------------------------------分割线---------------------------------

class Person {
    constructor(age) {
        this.age_ = age;
    }
    sayAge() {
        console.log(this.age_);
    }
    static create() {
        // 使用随机年龄创建并返回一个Person 实例
        return new Person(Math.floor(Math.random() * 100));
    }
}
console.log(Person.create()); // Person { age_: ... }
