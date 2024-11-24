
import Queue from "../../../src/data-structure/queue/queueObject";

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  // Helper function to verify queue state
  const expectQueueState = (expectedSize, expectedIsEmpty, expectedFront) => {
    expect(queue.size()).toBe(expectedSize);
    expect(queue.isEmpty()).toBe(expectedIsEmpty);
    expect(queue.peek()).toBe(expectedFront);
  };

  test('isEmpty() and size() should return correct results for a new queue', () => {
    expectQueueState(0, true, undefined); // Empty queue
  });

  test('enqueue() should add elements to the queue', () => {
    queue.enqueue(1);
    expectQueueState(1, false, 1); // One element in the queue

    queue.enqueue(2).enqueue(3);
    expectQueueState(3, false, 1); // Three elements, front remains 1
  });

  test('dequeue() should remove the front element and return the new front or null', () => {
    queue.enqueue(1).enqueue(2).enqueue(3);

    expect(queue.dequeue()).toBe(1); // Removes 1, new front is 2
    expectQueueState(2, false, 2);

    expect(queue.dequeue()).toBe(2); // Removes 2, new front is 3
    expectQueueState(1, false, 3);

    expect(queue.dequeue()).toBe(3); // Removes 3, queue becomes empty
    expectQueueState(0, true, undefined);

    expect(queue.dequeue()).toBe(undefined); // Removing from empty queue
    expectQueueState(0, true, undefined);
  });

  test('peek() should return the front element without removing it', () => {
    expect(queue.peek()).toBe(undefined); // Peeking into an empty queue

    queue.enqueue(1).enqueue(2);
    expect(queue.peek()).toBe(1); // Peek should return the first element
    expectQueueState(2, false, 1); // State remains unchanged
  });

  test('print() should display the current state of the queue', () => {
    console.log = jest.fn(); // Mock console.log

    queue.enqueue(1).enqueue(2).enqueue(3);
    queue.print();
    expect(console.log).toHaveBeenCalledWith({
      0: 1,
      1: 2,
      2: 3,
    });
  });

  test('Handles large number of operations', () => {
    const largeNumber = 1000;
    for (let i = 1; i <= largeNumber; i++) {
      queue.enqueue(i);
    }
    expectQueueState(largeNumber, false, 1); // First element remains 1

    for (let i = 1; i <= largeNumber; i++) {
      expect(queue.dequeue()).toBe(i); // Should return elements in order
    }
    expectQueueState(0, true, undefined); // Queue should be empty
  });
});
