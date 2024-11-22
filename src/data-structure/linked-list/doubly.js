class Node {
  /**
   * Node constructor
   * @param {any} value - The value this node will hold
   */
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  /**
   * Constructs a new empty Doubly Linked List
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
   * Adds a new node at the end of the list with the given value.
   * 
   * @param {*} value - The value for the new node.
   * @returns {LinkedList} This list for chaining purposes.
   */
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node; // Moved this line inside else block for clarity
    }
    this.size++;
    return this;
  }

/**
 * Adds a new node at the beginning of the list with the given value.
 * 
 * @param {*} value - The value for the new node.
 */
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
    return this;
  }

/**
 * Inserts a new node with the given value at the specified index in the doubly linked list.
 * 
 * @param {*} value - The value to be inserted.
 * @param {number} index - The index at which the value should be inserted.
 * @returns {LinkedList} This list for chaining purposes.
 */
  insert(value, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Invalid index");
    }
    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this.size) {
      return this.append(value);
    }
    const node = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    node.next = current.next; // link the new node to the next node
    node.prev = current; // link the new node to the previous node
    current.next.prev = node; // link the next node prev ptr  to the new node
    current.next = node; // link the previous  node next ptr to the new node
    this.size++;
    return this;
  }

  /**
   * Removes the node at the given index from the doubly linked list.
   * 
   * @param {number} index - The index of the node to be removed.
   * @returns {*} The value of the removed node.
   * @throws {Error} If the index is invalid.
   */
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

  
  /**
   * Removes all nodes from the list that have the given value.
   * 
   * @param {*} value - The value to be removed.
   * @returns {*} The value if at least one node was found and removed, null otherwise.
   */
  removeByValue(value) {
    let current = this.head;
    let found = false; // Flag to track if the value is found and removed
    while (current) {
      if (current.value === value) {
        found = true; // We found at least one node with the value
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
          // if current is somewhere in the middle of the list
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.size--;
        // Move to the next node (which is now current.next) in case we dont need duplicated values we will keep remove all occurences
        //current = current.next;
        
        return value; // Return immediately after removing the first occurrence
      } else {
        // Only move to the next node if no removal occurred
        current = current.next;
      }
    }
    // Return based on whether we found any node with the given value
    return found ? value : null;
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
   * Reverses the doubly linked list in-place.
   * 
   * Time complexity: O(n), where n is the size of the list.
   * 
   * @returns {LinkedList} This list for chaining purposes.
   */
  reverse() {
    // Return immediately if the list is empty or has only one element
    if (this.head === null || this.head.next === null) {
        return this;
    }

    let current = this.head;
    let temp = null;

    while (current) {
        // Swap next and prev for the current node
        temp = current.prev;     // Temporarily store the previous node
        current.prev = current.next; // Set prev to point to next
        current.next = temp;     // Set next to the previous node

        // Move to the next node (which is the previous one due to swap)
        current = current.prev;
    }

    // After the loop, temp points to the new head (which was originally the tail)
    // condition here for safty from future bugs
    if (temp) {
        this.tail = this.head;   // Update the tail to be the original head
        this.head = temp.prev;   // Update the head to be the new head (last node processed)
    }

    return this;
}


  
  /**
   * Returns a string representation of the doubly linked list.
   * 
   * Time complexity: O(n), where n is the size of the list.
   * 
   * @returns {string} A string representation of the list in the format
   * "null <- -> <value1> <- -> <value2> <- -> ... <- -> <valueN> <- -> null".
   */
  print() {
    if (this.isEmpty()) {
      return 'null <- -> null';
    }
    let output = [];
    let current = this.head;
    while (current) {
      output.push(current.value);
      current = current.next;
    }
    return "null <- -> " + output.join(" <- -> ") + " <- -> null";
  }
}

export default LinkedList;

