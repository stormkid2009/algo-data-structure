class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    getLength() {
        return this.length;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    insert(value, index) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            return this.prepend(value);
        }

        if (index === this.length) {
            return this.append(value);
        }

        const node = new Node(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }

        node.next = prev.next;
        prev.next = node;
        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return false;
        }

        if (index === 0) {
            this.head = this.head.next;
            if (this.length === 1) {
                this.tail = null;
            }
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            prev.next = prev.next.next;
            if (index === this.length - 1) {
                this.tail = prev;
            }
        }

        this.length--;
        return this;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Empty List');
            return;
        }

        let current = this.head;
        let output = '';
        while (current) {
            output += `${current.value} -> `;
            current = current.next;
        }
        output += 'null';
        console.log(output);
    }
}


let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.print();
list.insert(6, 3);
list.print();
list.remove(3);
list.print();