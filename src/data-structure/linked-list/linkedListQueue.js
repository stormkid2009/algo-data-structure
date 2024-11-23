

import LinkedList from '../linked-list/singly.js';


class Queue {
    /**
     * Constructs a new Queue object.
     * 
     * Initializes the queue object with an empty singly linked list.
     * 
     * @constructor
     */
    constructor() {
        this.list = new LinkedList();
    } 

    /**
     * Adds an element to the end of the queue.
     * 
     * @param {*} value - The element to be added.
     * 
     * @returns {Queue} This queue for chaining purposes.
     */
    enqueue(value) {
        this.list.append(value);
        return this;
    }

    /**
     * Removes the element at the front of the queue.
     * 
     * @returns {*} The element that was removed or null if the queue is empty.
     */
    dequeue() {
        if(this.isEmpty()) return null;
        return this.list.remove(0);
    }

/**
 * Returns the value at the front of the queue without removing it.
 * 
 * @returns {*} The value at the front of the queue or null if the queue is empty.
 */
    peek() {
        return this.list.head? this.list.head.value : null;
    }

    /**
     * Checks if the queue is empty.
     * 
     * @returns {boolean} true if the queue is empty, false otherwise.
     */
    isEmpty() {
        return this.list.isEmpty();
    }

    /**
     * Returns the number of elements in the queue.
     * 
     * @returns {number} The number of elements in the queue.
     */
    getSize() {
        return this.list.getSize();
    }
    /**
     * Prints the elements of the queue.
     * 
     * @returns {string} A string representation of the queue with its elements.
     */
    print() {
        if(this.isEmpty()) {
            return "List is empty";
        }
        return this.list.print();
    }
}

export default Queue;