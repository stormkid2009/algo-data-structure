
import Stack from "../../../src/data-structure/linked-list/linkedListStack";



describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('isEmpty() should return true for a new stack', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getSize()).toBe(0);
  });

  test('push() should add elements to the stack', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getSize()).toBe(1);
    stack.push(2).push(3);
    expect(stack.getSize()).toBe(3);
    expect(stack.print()).toBe('3 -> 2 -> 1 -> null');
  });

  test('pop() should remove and return the top element of the stack', () => {
    stack.push(1).push(2).push(3);
    expect(stack.pop()).toBe(3); // LIFO order
    expect(stack.getSize()).toBe(2);
    expect(stack.print()).toBe('2 -> 1 -> null');

    expect(stack.pop()).toBe(2);
    expect(stack.getSize()).toBe(1);

    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);

    // Popping from an empty stack
    expect(stack.pop()).toBe(null);
});


  test('peek() should return the top element without removing it', () => {
    expect(stack.peek()).toBe(null); // Peeking into an empty stack
    stack.push(1).push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.getSize()).toBe(2);
    expect(stack.print()).toBe('2 -> 1 -> null');
  });

  test('getSize() should return the correct number of elements', () => {
    expect(stack.getSize()).toBe(0);
    stack.push(1).push(2);
    expect(stack.getSize()).toBe(2);
    stack.pop();
    expect(stack.getSize()).toBe(1);
  });

  test('print() should return a string representation of the stack', () => {
    expect(stack.print()).toBe("List is empty");
    stack.push(1).push(2).push(3);
    expect(stack.print()).toBe('3 -> 2 -> 1 -> null');
    stack.pop();
    expect(stack.print()).toBe('2 -> 1 -> null');
    stack.pop();
    stack.pop();
    expect(stack.print()).toBe("List is empty"); // Empty stack
  });
});
