class CircularQueue {
    constructor(capacity) {
        this.queue = Array(capacity);
        this.start = 0;
        this.end = 0;
        this.size = 0;
        this.capacity = capacity;
    }

    isFull() {
        return this.size === this.capacity;
    }

    isEmpty() {
        return this.size === 0;
    }

    addToQueue(element) {
        if (this.isFull()) return false;  // Stop adding if full

        this.queue[this.end] = element;
        this.end = (this.end + 1) % this.capacity;
        this.size++;
        return true;  // Return success for feedback
    }

    removeFromQueue() {
        if (this.isEmpty()) return null;  // Return null to indicate empty

        const item = this.queue[this.start];
        this.queue[this.start] = null;  // Clear the spot
        this.start = (this.start + 1) % this.capacity;
        this.size--;
        return item;  // Return the removed element
    }

    peek() {
        return this.isEmpty() ? null : this.queue[this.start];
    }

    getSize() {
        return this.size;
    }

    print() {
        console.log(this.queue);
    }
}

// Example usage:
const queue = new CircularQueue(3);
queue.addToQueue(1);
queue.addToQueue(2);
queue.addToQueue(3);
queue.print();  // Output: [1, 2, 3]

queue.removeFromQueue();  // Removes 1
queue.print();  // Output: [null, 2, 3]

queue.removeFromQueue();  // Removes 2
queue.print();  // Output: [null, null, 3]

queue.addToQueue(4);
queue.addToQueue(5);

queue.print();  // Output: [4, 5, 3]

queue.getSize();  // Output: 3
console.log(queue.peek());  // Output: 3

