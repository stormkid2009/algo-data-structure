//stack implementation using array LIFO [means last in first out]


class Stack {

    /**
     * Constructs a new Stack object.
     * 
     * @constructor
     */
    constructor() {
        this.stack = [];
    }

    
    /**
     * Adds an element to the top of the stack.
     * 
     * @param {*} element - The element to be added.
     */
    push(element) {
        this.stack.push(element);
    }

    
    /**
     * Removes the top element from the stack.
     * 
     * @returns {*} The element that was removed or null if the stack is empty.
     */
    pop() {
        if(this.isEmpty()) {
            console.log('stack is empty');
            return null
    }
    return this.stack.pop();
}


    /**
     * Returns the top element from the stack without removing it.
     * 
     * @returns {*} The element at the top of the stack or null if the stack is empty.
     */
    peek() {
        if(this.isEmpty()) {
            console.log('stack is empty');
            return null
    }
    return this.stack[this.stack.length - 1];
    }

    
    /**
     * Checks if the stack is empty.
     * 
     * @returns {boolean} true if the stack is empty, false otherwise.
     */
    isEmpty() {
        return this.stack.length === 0;
    }
    
    
    /**
     * Returns the number of elements in the stack.
     * 
     * @returns {number} The number of elements in the stack.
     */
    size() {
        return this.stack.length
    }

    
    
    /**
     * Prints the elements of the stack.
     */
    print() {
        console.log(this.stack.toString())
    }
}