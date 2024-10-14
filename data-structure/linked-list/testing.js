// TESTING LINKED LIST
/*
const LinkedList = require('./singly');
const list = new LinkedList();
list.append(10).append(20).append(30).prepend(5);
console.log(list.print()); // 5 -> 10 -> 20 -> 30 -> null
console.log(list.isEmpty()); // false
console.log(list.getSize()); // 4
console.log(list.removeByValue(30)); // 30
console.log(list.removeByValue(5)); // 5
console.log(list.print()); // 10 -> 20 -> null
console.log(list.getSize()); // 2
console.log(list.isEmpty()); // false
console.log(list.removeByValue(20)); // 20
console.log(list.isEmpty()); // false
console.log(list.getSize()); // 1
console.log(list.removeByValue(10)); // 10
console.log(list.isEmpty()); // true
console.log(list.getSize()); // 0
console.log(list.print()); // null

*/

const LinkedList = require('./doubly');
const list = new LinkedList();
list.append(10).append(20).append(30).prepend(5).append(40).append(50);
console.log(list.print()); // null <- 5 -> <- 10 -> <- 20 -> <- 30 -> <- 40 -> <- 50 ->null
list.reverse();
console.log(list.print()); // null <- 50 -> <- 40 -> <- 30 -> <- 20 -> <- 10 -> <- 5 ->null
