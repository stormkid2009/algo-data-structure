// return this key word at the end of methodes allow methods chaining like append prepend insert
// but we prefer to return the value from some methods like remove and removeByValue

class Node {
  /**
   * Node constructor
   * @param {any} value - The value this node will hold
   */
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  /**
   * Constructs a new empty Singly Linked List
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Checks if the list is empty.
   *
   * @returns {boolean} true if the list is empty, false otherwise.
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * Gets the size of the list.
   *
   * @returns {number} The number of elements in the list.
   */
  getSize() {
    return this.size;
  }

  /**
   * Adds a new node at the beginning of the list with the given value.
   *
   * @param {*} value - The value for the new node.
   * @returns {LinkedList} This list for chaining purposes.
   */
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

  /**
   * Adds a new node at the end of the list with the given value.
   *
   * @param {*} value - The value for the new node.
   * @returns {LinkedList} This list for chaining purposes.
   */
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

  /**
   * Inserts a new node with the given value at the specified index in the singly linked list.
   *
   * @param {*} value - The value to be inserted.
   * @param {number} index - The index at which the value should be inserted.
   * @returns {LinkedList} This list for chaining purposes.
   * @throws {Error} If the index is invalid.
   */
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

  /**
   * Removes the node at the given index from the singly linked list.
   *
   * @param {number} index - The index of the node to be removed.
   * @returns {*} The value of the removed node.
   * @throws {Error} If the index is invalid.
   */
  remove(index) {
    let removedNode;
    if (index < 0 || index >= this.size) {
      throw new Error(`Invalid index ${index}`);
    }
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

  /**
   * Removes all nodes from the list that have the given value.
   *
   * @param {*} value - The value to be removed.
   * @returns {*} The value if at least one node was found and removed, null otherwise.
   * @throws {Error} If the list is empty.
   */
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
          if (this.size === 1) {
            // If it's the only node
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

  /**
   * Reverses the singly linked list in-place.
   *
   * Time complexity: O(n), where n is the size of the list.
   *
   * @returns {LinkedList} This list for chaining purposes.
   * @throws {Error} If the list is empty.
   */
  reverse() {
    if (this.isEmpty()) {
      throw new Error("List is empty"); // control user beahvior to protect chaining methons from errors
    }

    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
      next = current.next; // Store the next node and rest of the list
      current.next = prev; // Reverse the link
      prev = current; // swap prev ,current and next for next iteration [0,1,2] -> [1,2,3]
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
    return this;
  }
  /**
   * Searches for a node with the specified value and returns its index.
   *
   * @param {*} value - The value to search for in the list.
   * @returns {number} The index of the node containing the value, or -1 if not found.
   */
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
  /**
   * Returns a string representation of the singly linked list.
   *
   * Time complexity: O(n), where n is the size of the list.
   *
   * @returns {string} A string representation of the list in the format
   * "<value1> -> <value2> -> ... -> <valueN> -> null".
   */
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

export default LinkedList;
