// Queue implementaion


class Queue {

    /**
     * Constructs a new Queue object.
     */
    constructor() {
        this.queue = [];
    }


    /**
     * Adds an element to the end of the queue.
     * 
     * @param {*} element - The element to be added.
     */
    enqueue(element) {
        this.queue.push(element);
    }

    /**
     * Removes the element at the front of the queue.
     * 
     * @returns {*} The element that was removed or null if the queue is empty.
     */
    dequeue() {
        return this.queue.shift();
    }

    
    

    /**
     * Checks if the queue is empty.
     * 
     * @returns {boolean} true if the queue is empty, false otherwise.
     */
    isEmpty() {
        return this.queue.length === 0;
    }

    
    /**
     * Returns the element at the front of the queue without removing it.
     * 
     * @returns {*} The element at the front of the queue or null if the queue is empty.
     */
    peek() {
        if(!this.isEmpty()) {
            return this.queue[0];
        }

        return null;
    }

    
    /**
     * Returns the number of elements in the queue.
     * 
     * @returns {number} The number of elements in the queue.
     */
    size() {
        return this.queue.length
    }


    /**
     * Prints the elements of the queue.
     */
    print() {
        console.log(this.queue);
    }

    
}

