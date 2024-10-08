// return this key word at the end of methodes allow methods chaining
// like list.remove(1).append(2).print()

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
      throw new Error(`Invalid index ${index}`);
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
    let removedNode;
    if (index < 0 || index >= this.length) {
      throw new Error(`Invalid index ${index}`);
    }

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      // clean up removedNode
      removedNode.next = null;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = prev.next.next;
      if (!prev.next) {
        this.tail = prev;
      }
      // clean up removedNode
      removedNode.next = null;
    }

    this.length--;
    return this;
  }

  removeByValue(value) {
    if (this.isEmpty()) {
      throw new Error("List is empty");
    }

    let current = this.head;
    let prev = null; // Initially, prev is null because we haven't moved past the head.
    while (current) {
      if (current.value === value) {
        // If the node to remove is the head
        if (prev === null) {
          this.head = current.next; //if it is the only node we set head to null
        } else {
          prev.next = current.next;
        }
        //check if it is the last element
        if (!current.next) {
          this.tail = prev;
        }
        this.length--;
        return this;
      }
      prev = current;
      current = current.next;
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      return `List is empty`;
    }

    let current = this.head;
    const output = [];
    while (current) {
      output.push(current.value);
      current = current.next;
    }
    return output.join(" -> ") + " -> null";
  }
}

const list = new LinkedList();
list.append(1).append(2).append(3).append(4).append(5).append(6).append(7);
console.log(list.print()); // expected output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null   
list.removeByValue(3);
console.log(list.print()); // expected output: 1 -> 2 -> 4 -> 5 -> 6 -> 7 -> null
console.log(list.removeByValue(9)); //expected output: null
list.removeByValue(1); 
console.log(list.print()); // expected output: 2 -> 4 -> 5 -> 6 -> 7 -> null
list.removeByValue(7); 
console.log(list.print()); // expected output: 2 -> 4 -> 5 -> 6 -> null