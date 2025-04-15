// /**
//  * @returns  new 一个对象的全过程
//  * 1. 创建一个新对象
//  * 2. 将空对象的 __proto__ 指向构造函数的 prototype
//  * 3. 执行构造函数，改变 this 指向新对象
//  * 4. 如果构造函数有返回一个对象，则返回这个对象，否则返回新创建的那个对象
//  */

// // call apply bind  https://blog.csdn.net/qq_40868156/article/details/127273094

// // 1. 第 1 种
// function _new() {
//     console.log(arguments, 'arguments', typeof arguments);
//     let obj = new Object();
//     //   let Constructor = [].shift.call(arguments); // 获取构造函数
//     let Constructor = Array.prototype.shift.call(arguments); // 获取构造函数
//     obj.__proto__ = Constructor.prototype;
//     let ret = Constructor.apply(obj, arguments);
//     return typeof ret === 'object' ? ret : obj;
// }
// const Person = function (name) {
//     this.name = name;
// }
// let p1 = _new(Person, 'Tom');
// console.log(p1.name); // Tom


// // --------------------------------------------------------分割线---------------------------------
// // 第 2 种  
// function _new2(ConstructorFunc, ...args) {
//     console.log(args, 'args');
//     let obj = {}
//     obj.__proto__ = ConstructorFunc.prototype

//     let ret = ConstructorFunc.apply(obj, args)
//     return ret instanceof Object ? ret : obj
// }
// const Person2 = function (name) {
//     this.name = name;
// }
// let p2 = _new2(Person2, 'Jerry');
// console.log(p2.name); // Jerry


// // --------------------------------------------------------分割线---------------------------------
// // 第 3 种
// function _new3() {
//     // 1、获得构造函数，同时获取到删除 arguments 的第一个参数
//     Con = [].shift.call(arguments);
//     // 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性
//     const obj = Object.create(Con.prototype);
//     // 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
//     const ret = Con.apply(obj, arguments);
//     // 4、优先返回构造函数返回的对象
//     return ret instanceof Object ? ret : obj;
// };


