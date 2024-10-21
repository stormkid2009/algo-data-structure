class CircularQueue {
    /**
     * Constructs a new CircularQueue object.
     * 
     * Initializes the queue object with an array of given capacity, and sets start and end indices to 0.
     * 
     * @param {number} capacity - The capacity of the queue.
     */
    constructor(capacity) {
        this.queue = Array(capacity);
        this.start = 0;
        this.end = 0;
        this.size = 0;
        this.capacity = capacity;
    }

    /**
     * Checks if the queue is full.
     * 
     * @returns {boolean} true if the queue is full, false otherwise.
     */
    isFull() {
        return this.size === this.capacity;
    }

    /**
     * Checks if the queue is empty.
     * 
     * @returns {boolean} true if the queue is empty, false otherwise.
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * Adds an element to the end of the queue.
     * 
     * @param {*} element - The element to be added.
     * 
     * @returns {boolean} true if the element was added, false if the queue is full.
     */
    addToQueue(element) {
        if (this.isFull()) return false;  // Stop adding if full

        this.queue[this.end] = element;
        this.end = (this.end + 1) % this.capacity;
        this.size++;
        return true;  // Return success for feedback
    }

    /**
     * Removes the element at the front of the queue.
     * 
     * @returns {*} The element that was removed or null if the queue is empty.
     */
    removeFromQueue() {
        if (this.isEmpty()) return null;  // Return null to indicate empty

        const item = this.queue[this.start];
        this.queue[this.start] = null;  // Clear the spot
        this.start = (this.start + 1) % this.capacity;
        this.size--;
        return item;  // Return the removed element
    }

    /**
     * Returns the element at the front of the queue without removing it.
     * 
     * @returns {*} The element at the front of the queue or null if the queue is empty.
     */
    peek() {
        return this.isEmpty() ? null : this.queue[this.start];
    }

    /**
     * Returns the number of elements in the queue.
     * 
     * @returns {number} The number of elements in the queue.
     */
    getSize() {
        return this.size;
    }

    /**
     * Prints the elements of the queue.
     * 
     * @returns {void}
     */
    print() {
        console.log(this.queue);
    }
}

// Example usage:
// const queue = new CircularQueue(3);
// queue.addToQueue(1);
// queue.addToQueue(2);
// queue.addToQueue(3);
// queue.print();  // Output: [1, 2, 3]

// queue.removeFromQueue();  // Removes 1
// queue.print();  // Output: [null, 2, 3]

// queue.removeFromQueue();  // Removes 2
// queue.print();  // Output: [null, null, 3]

// queue.addToQueue(4);
// queue.addToQueue(5);

// queue.print();  // Output: [4, 5, 3]

// queue.getSize();  // Output: 3
// console.log(queue.peek());  // Output: 3
