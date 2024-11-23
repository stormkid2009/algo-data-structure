
import Queue from "../../../src/data-structure/queue/queueArray";


describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('isEmpty() should return true for a new queue', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  test('enqueue() should add elements to the queue', () => {
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size()).toBe(1);

    queue.enqueue(2).enqueue(3);
    expect(queue.size()).toBe(3);
    expect(queue.peek()).toBe(1); // The front of the queue should be the first enqueued element
  });

  test('dequeue() should remove the front element and return the new front or null', () => {
    queue.enqueue(1).enqueue(2).enqueue(3);
    
    // Removing the first element
    expect(queue.dequeue()).toBe(2); // Returns the new front element
    expect(queue.size()).toBe(2);

    expect(queue.dequeue()).toBe(3); // Second removal
    expect(queue.size()).toBe(1);

    // Removing the last element
    expect(queue.dequeue()).toBe(null); // Returns null when queue becomes empty
    expect(queue.isEmpty()).toBe(true);

    // Dequeuing from an empty queue
    expect(queue.dequeue()).toBe(null);
  });

  test('peek() should return the front element without removing it', () => {
    expect(queue.peek()).toBe(null); // Peeking into an empty queue
    queue.enqueue(1).enqueue(2);
    expect(queue.peek()).toBe(1); // The front element remains the same
    expect(queue.size()).toBe(2); // Size remains unchanged
  });

  test('size() should return the correct number of elements', () => {
    expect(queue.size()).toBe(0);
    queue.enqueue(1).enqueue(2).enqueue(3);
    expect(queue.size()).toBe(3);
    queue.dequeue();
    expect(queue.size()).toBe(2);
  });

  test('print() should output the elements of the queue', () => {
    console.log = jest.fn(); // Mock console.log
    queue.enqueue(1).enqueue(2).enqueue(3);
    queue.print();
    expect(console.log).toHaveBeenCalledWith([1, 2, 3]);
  });
});

