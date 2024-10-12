// return this key word at the end of methodes allow methods chaining like append prepend insert
// but we prefer to return the value from some methods like remove and removeByValue


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
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
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
    this.size++;
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
    this.size++;
    return this; // Enable chaining
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      throw new Error(`Invalid index ${index}`);
    }

    // Directly use prepend or append based on index
    if (index === 0) {
      return this.prepend(value);
    }

    if (index === this.size) {
      return this.append(value);
    }

    const node = new Node(value);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    node.next = prev.next;
    prev.next = node;
    this.size++;
    return this; // Enable chaining
  }

  remove(index) {
    let removedNode;
    if (index < 0 || index >= this.size) {
      throw new Error(`Invalid index ${index}`);
    };
    if (index === 0) {
       removedNode = this.head;
      this.head = this.head.next;
      if (this.size === 1) {
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
      
    }

    this.size--;
    return removedNode.value; // Return the removed node
  }

  removeByValue(value) {
    if (this.isEmpty()) {
      throw new Error("List is empty"); // control user beahvior to protect chaining methons from errors
    }
    let removedNode;
    let current = this.head;
    let prev = null; // Initially, prev is null because we haven't moved past the head.
    while (current) {
      if (current.value === value) {
        removedNode = current;
        // If the node to remove is the head
        if (prev === null) {
          this.head = current.next; //if it is the only node we set head to null
          if (this.size === 1) { // If it's the only node
            this.tail = null;
          }
        } else {
          prev.next = current.next;
        }
        //check if it is the last element
        if (!current.next) {
          this.tail = prev;
        }
        this.size--;
        return removedNode.value;
      }
      prev = current;
      current = current.next;
    }
    return null; // Value not found
  }


  reverse() {
    if (this.isEmpty()) {
      throw new Error("List is empty"); // control user beahvior to protect chaining methons from errors
    }

    let current = this.head;
    let prev = null;
    let next = null;
    while(current){
      next = current.next; // Store the next node and rest of the list
      current.next = prev; // Reverse the link
      prev = current; // swap prev ,current and next for next iteration [0,1,2] -> [1,2,3]
      current = next;
    }
    this.tail = this.head;
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
    return -1;
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



module.exports = LinkedList