

const linkedList = require('./singly');

class Queue {
    constructor() {
        this.list = new linkedList();
    } 

    enqueue(value) {
        this.list.append(value);
        return this;
    }

    dequeue() {
        return this.list.removeByIndex(0);
    }

    peek() {
        return this.list.head.value? this.list.head.value : null;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getLength();
    }
    print() {
        return this.list.print();
    }
}