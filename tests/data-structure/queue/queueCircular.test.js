
import Queue from "../../../src/data-structure/queue/queueCircular";

describe("CircularQueue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue(3); // Initialize with a capacity of 3
  });

  // Helper function to verify queue state
  const expectQueueState = (expectedSize, expectedIsEmpty, expectedIsFull, expectedFront) => {
    expect(queue.getSize()).toBe(expectedSize);
    expect(queue.isEmpty()).toBe(expectedIsEmpty);
    expect(queue.isFull()).toBe(expectedIsFull);
    expect(queue.peek()).toBe(expectedFront);
  };

  test("isEmpty() and getSize() should return correct results for a new queue", () => {
    expectQueueState(0, true, false, null); // Empty queue
  });

  test("enqueue() should add elements to the queue", () => {
    expect(queue.enqueue(1)).toBe(true);
    expectQueueState(1, false, false, 1); // One element in the queue

    expect(queue.enqueue(2)).toBe(true);
    expect(queue.enqueue(3)).toBe(true);
    expectQueueState(3, false, true, 1); // Queue is now full

    expect(queue.enqueue(4)).toBe(false); // Should not add, queue is full
  });

  test("dequeue() should remove the front element and return the new front or null", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expectQueueState(3, false, true, 1); // Initial state, full queue

    expect(queue.dequeue()).toBe(1); // Removes 1, new front is 2
    expectQueueState(2, false, false, 2);

    expect(queue.dequeue()).toBe(2); // Removes 2, new front is 3
    expectQueueState(1, false, false, 3);

    expect(queue.dequeue()).toBe(3); // Removes 3, queue becomes empty
    expectQueueState(0, true, false, null);

    expect(queue.dequeue()).toBe(null); // Removing from empty queue
    expectQueueState(0, true, false, null);
  });

  test("peek() should return the front element without removing it", () => {
    expect(queue.peek()).toBe(null); // Peeking into an empty queue

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1); // Peek should return the first element
    expectQueueState(2, false, false, 1); // State remains unchanged
  });

  test("Handles wraparound correctly", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expectQueueState(3, false, true, 1); // Queue is full

    expect(queue.dequeue()).toBe(1); // Removes 1
    expect(queue.dequeue()).toBe(2); // Removes 2
    expectQueueState(1, false, false, 3); // Queue wraps around partially

    expect(queue.enqueue(4)).toBe(true);
    expect(queue.enqueue(5)).toBe(true); // Wraps around to the beginning
    expectQueueState(3, false, true, 3); // Queue is full again

    expect(queue.dequeue()).toBe(3); // Removes 3
    expectQueueState(2, false, false, 4); // Front is updated correctly
  });

  test("print() should display the current state of the queue", () => {
    console.log = jest.fn(); // Mock console.log

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.print();
    expect(console.log).toHaveBeenCalledWith([1, 2, 3]); // Full array representation

    queue.dequeue();
    queue.enqueue(4); // Queue wraps around
    queue.print();
    expect(console.log).toHaveBeenCalledWith([4, 2, 3]); // Wraparound representation
  });

  test("Handles large number of operations efficiently", () => {
    const capacity = 5;
    const largeQueue = new Queue(capacity);

    for (let i = 1; i <= capacity; i++) {
      expect(largeQueue.enqueue(i)).toBe(true); // Fill the queue
    }
    expect(largeQueue.isFull()).toBe(true);

    for (let i = 1; i <= capacity; i++) {
      expect(largeQueue.dequeue()).toBe(i); // Empty the queue in order
    }
    expect(largeQueue.isEmpty()).toBe(true);
  });
});
