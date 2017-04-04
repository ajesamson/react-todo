// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));
//
// var groupA = ['Jen', 'Carry'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA];
//
// console.log(final)

var person = ['Andrew', 25];
var personTwo = ['Jem', 29];

var Greet = function (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

Greet(...person);
Greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (name) {
  console.log('Hi '+  name);
})
