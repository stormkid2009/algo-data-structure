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
    // If list is empty, head and tail both point to the new node
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this; // Enable chaining
  }

  append(value) {
    const node = new Node(value);
    // If list is empty, head and tail both point to the new node
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this; // Enable chaining
  }

  insert(value, index) {
    if (index < 0 || index > this.length) {
      throw new Error(`Invalid index ${index}`);
    }

    // Directly use prepend or append based on index
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
    return this; // Enable chaining
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error(`Invalid index ${index}`);
    }

    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
      if (!prev.next) {
        this.tail = prev;
      }
    }

    this.length--;
    return this; // Enable chaining
  }

  removeByValue(value) {
    if (this.isEmpty()) {
      return null; // Consistent with returning null when not found
    }

    let current = this.head;
    let prev = null;
    while (current) {
      if (current.value === value) {
        if (prev === null) { // Node to remove is the head
          this.head = current.next;
          if (this.length === 1) { // If it's the only node
            this.tail = null;
          }
        } else {
          prev.next = current.next;
          if (!prev.next) { // If it's the tail node
            this.tail = prev;
          }
        }
        this.length--;
        return this; // Enable chaining
      }
      prev = current;
      current = current.next;
    }
    return null; // Value not found
  }


  reverse() {
    let current =this.tail =  this.head; // we shall assign the tail to the head too
    let prev = null;
    let next = null;
    while (current) {
      next = current.next; // Store the next node and rest of the list
      current.next = prev; // Reverse the link
      prev = current; // swap prev ,current and next for next iteration [0,1,2] -> [1,2,3]
      current = next;
    }
    this.head = prev;
    return this;
  }
  search(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1; // Value not found
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

// Example usage:
const list = new LinkedList();
list.append(1).append(2).append(3).append(4).append(5).append(6).append(7);
console.log(list.search(3)); // expected output: 2
console.log(list.search(9)); // expected output: -1
list.reverse();
console.log(list.print()); // expected output: 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> null
