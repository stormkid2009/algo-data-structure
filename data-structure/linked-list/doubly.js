class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    
    getSize(){
        return this.size
    }
    
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = this.tail = node
        }else{
            node.prev = this.tail
            this.tail.next = node
            this.tail = node; // Moved this line inside else block for clarity
        }
        this.size++
        return this
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
        return this
    }

    insert(value, index){
        if(index < 0 || index > this.size){
            throw new Error("Invalid index")
        }
        if(index === 0){
            return this.prepend(value)
        }
        if(index === this.size){
            return this.append(value)
        }
        const node = new Node(value)
        let current = this.head
        for(let i = 0; i < index-1; i++){
            current = current.next
        }
        node.next = current.next // link the new node to the next node
        node.prev = current     // link the new node to the previous node
        current.next.prev = node // link the next node prev ptr  to the new node
        current.next = node      // link the previous  node next ptr to the new node
        this.size++
        return this
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Invalid index");
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
            // if we still have a head, set its prev to null
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null; // List is now empty
            }
        } else if (index === this.size - 1) {
            removedNode = this.tail;
            this.tail = this.tail.prev;
            // if we still have a tail, set its next to null
            if (this.tail) {
                this.tail.next = null;
            } else {
                this.head = null; // List is now empty
            }
        } else {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            removedNode = current;
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.size--;
        return removedNode.value;
    }
    

    removeByValue(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = current.next;
                    // if we still have a head, set its prev to null
                    if (this.head) {
                        this.head.prev = null;
                    } else {
                        this.tail = null; // List is now empty
                    }
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    // if we still have a tail, set its next to null
                    if (this.tail) {
                        this.tail.next = null;
                    } else {
                        this.head = null; // List is now empty
                    }
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--;
                return value; // Returns the first occurrence
            }
            current = current.next;
        }
        return null; // Return null if no match is found
    }
    
    print(){
        let output = []
        let current = this.head
        while(current){
            output.push(current.value)
            current = current.next
        }
        return "null <- -> " + output.join(" <- -> ") + " <- -> null"
    }
}

module.exports = LinkedList
/*
const list = new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.append(30).append(40).append(50).prepend(20).prepend(10).insert(25, 2)
console.log(list.print())
console.log(list.remove(5))
console.log(list.print())
console.log(list.remove(0))
console.log(list.print())

*/