

class Queue {
    /**
     * Constructs a new Queue object.
     * 
     * Initializes the queue object with an empty object, and sets the start and end indices to 0.
     * 
     * @constructor
     */
    constructor() {
        this.queue = {};
        this.start = 0;
        this.end = 0;
    }

    /**
     * Adds an element to the end of the queue.
     * 
     * @param {*} element - The element to be added.
     */
    enqueue(element) {
        this.queue[this.end] = element;
        this.end++;
        return this;
    }

    /**
     * Removes the element at the front of the queue.
     * 
     * @returns {*} The element that was removed or null if the queue is empty.
     */
    dequeue() {
        if(this.isEmpty()) return undefined;
        const element = this.queue[this.start];
        delete this.queue[this.start];
        this.start++;
        return element;
    }

    /**
     * Returns the element at the front of the queue without removing it.
     * 
     * @returns {*} The element at the front of the queue or null if the queue is empty.
     */
    peek() {
        return this.queue[this.start];
    }

    /**
     * Checks if the queue is empty.
     * 
     * @returns {boolean} true if the queue is empty, false otherwise.
     */
    isEmpty() {
        return this.end - this.start === 0;
    }

    /**
     * Returns the number of elements in the queue.
     * 
     * @returns {number} The number of elements in the queue.
     */
    size() {
        return this.end - this.start;
    }

    /**
     * Prints the elements of the queue.
     */
    print() {
        console.log(this.queue);
    }
}


export default Queue