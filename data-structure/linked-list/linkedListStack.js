
const  LinkedList  = require('./singly');

class Stack {

  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
    return this; // Enable chaining
  }

  pop() {
    return this.list.remove(0);
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  peek() {
    return this.list.head.value? this.list.head.value : null;
  }

  print() {
    return this.list.print();
  }

  getSize() {
    return this.list.getLength();
  }

}

const stack = new Stack();
console.log(stack.print());
stack.push(1).push(2).push(3).push(4).push(5);

console.log(stack.print());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.getSize());
stack.pop();
console.log(stack.print());
console.log(stack.peek());
stack.pop();
console.log(stack.peek());