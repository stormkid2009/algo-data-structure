
const  LinkedList  = require('./singly');

class Stack {

  /**
   * Constructs a new Stack object.
   * 
   * Initializes the stack object with an empty singly linked list.
   */
  constructor() {
    this.list = new LinkedList();
  }

  /**
   * Adds an element to the top of the stack.
   * 
   * @param {*} value - The element to be added.
   * @returns {Stack} This stack for chaining purposes.
   */
  push(value) {
    this.list.prepend(value);
    return this; // Enable chaining
  }

  /**
   * Removes the top element from the stack.
   * 
   * @returns {*} The element that was removed or null if the stack is empty.
   */
  pop() {
    return this.list.remove(0);
  }

/**
 * Checks if the stack is empty.
 * 
 * @returns {boolean} true if the stack is empty, false otherwise.
 */
  isEmpty() {
    return this.list.isEmpty();
  }

  /**
   * Returns the element at the top of the stack without removing it.
   * 
   * @returns {*} The element at the top of the stack or null if the stack is empty.
   */
  peek() {
    return this.list.head.value? this.list.head.value : null;
  }

  /**
   * Prints the elements of the stack.
   * 
   * @returns {string} A string representation of the stack with its elements.
   */
  print() {
    return this.list.print();
  }

  /**
   * Returns the number of elements in the stack.
   * 
   * @returns {number} The number of elements in the stack.
   */
  getSize() {
    return this.list.getSize();
  }

}

module.exports = Stack;

/**
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
*/