
// i want to try something:
//           previous   <<<  node >>> next
// to be easy go forward and back in the list
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

  getLength() {
    return this.length;
  }

  makeList(arr) {
    const n = arr.length;
    if (n === 0) return;

    // Create the first node
    this.head = new Node(arr[0]);
    this.tail = this.head;
    this.length = 1;

    // Create the rest of the list
    for (let i = 1; i < n; i++) {
      const newNode = new Node(arr[i]);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
}

const list = new LinkedList();
list.makeList([1, 2, 3]);

function listToArray(list) {
  const arr = [];
  let current = list.head;
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  return arr;
}



console.log(listToArray(list));

