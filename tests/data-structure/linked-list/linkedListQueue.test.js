
import Queue from "../../../src/data-structure/linked-list/linkedListQueue";


describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('isEmpty() should return true for a new queue', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getSize()).toBe(0);
  });

  test('enqueue() should add elements to the queue', () => {
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.getSize()).toBe(1);
    queue.enqueue(2).enqueue(3);
    expect(queue.getSize()).toBe(3);
    expect(queue.print()).toBe('1 -> 2 -> 3 -> null');
  });

  test('dequeue() should remove and return the element at the front of the queue', () => {
    queue.enqueue(1).enqueue(2).enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.getSize()).toBe(2);
    expect(queue.print()).toBe('2 -> 3 -> null');
    expect(queue.dequeue()).toBe(2);
    expect(queue.getSize()).toBe(1);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.dequeue()).toBe(null); // Dequeuing from an empty queue
  });

  test('peek() should return the front element without removing it', () => {
    expect(queue.peek()).toBe(null); // Peeking into an empty queue
    queue.enqueue(1).enqueue(2);
    expect(queue.peek()).toBe(1);
    expect(queue.getSize()).toBe(2);
    expect(queue.print()).toBe('1 -> 2 -> null');
  });

  test('getSize() should return the correct number of elements', () => {
    expect(queue.getSize()).toBe(0);
    queue.enqueue(1).enqueue(2);
    expect(queue.getSize()).toBe(2);
    queue.dequeue();
    expect(queue.getSize()).toBe(1);
  });

  test('print() should return a string representation of the queue', () => {
    expect(queue.print()).toBe("List is empty");
    queue.enqueue(1).enqueue(2).enqueue(3);
    expect(queue.print()).toBe('1 -> 2 -> 3 -> null');
    queue.dequeue();
    expect(queue.print()).toBe('2 -> 3 -> null');
    queue.dequeue();
    queue.dequeue();
    expect(queue.print()).toBe("List is empty"); // Empty queue
  });
});
