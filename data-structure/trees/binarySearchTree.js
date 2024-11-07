class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }
  // binary search tree rules
  // 1. left node value < parent node value
  // 2. right node value > parent node value
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
      return this;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // lets try inserting some value with iterative approach
  insertIterative(value) {
    const newNode = new Node(value);
    // complete the code steps here
    if (this.isEmpty()) {
      this.root = newNode;
      return this;
    }
    // lets check our way to insert the value
    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }

    }
  
  search(node, value) {
    if (!node) {
      return false;
    }
    if (node.value === value) {
      return true;
    } else if (value < node.value) {
      return this.search(node.left, value);
    } else {
      return this.search(node.right, value);
    }
  }


  // Depth First Search mthods: preOrder, inOrder, postOrder
  preOrder(node) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  preOrderIterative(node) {
    if (!node) {
      return;
    }
    const stack = [];
    stack.push(node);
    while (stack.length > 0) {
      const current = stack.pop();
      console.log(current.value);
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
    }
  }

  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }

  // Breadth First Search method
  
  breadthFirstSearch(node) {
    if (!node) {
      return;
    }
    const queue = [];
    const results = [];
    queue.push(node);
    while (queue.length) {
      const current = queue.shift();
      results.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return results;
  }

  // find min value and max value in the tree
  min(node){
    if (!node.left) {
      return node.value;
    }
    return this.min(node.left);
  }

  max(node){
    if (!node.right) {
      return node.value;
    }
    return this.max(node.right);
  }


}

const bst = new BinarySearchTree();
bst.insertIterative(50);
bst.insertIterative(30);
bst.insertIterative(20);
bst.insertIterative(40);
bst.insertIterative(70);
bst.insertIterative(60);
bst.insertIterative(80);
// console.log(bst.search(bst.root, 30)); // expected true
// console.log(bst.search(bst.root, 100)); // expected false
// console.log(bst.search(bst.root, 70)); // expected true
// console.log(bst.search(bst.root, 60)); // expected true
// console.log(bst.search(bst.root, 10)); // expected false
// console.log(bst.search(bst.root, 10)); // expected false
// console.log(bst.search(bst.root, 10)); // expected false
// console.log(bst.preOrderIterative(bst.root));
const result = bst.breadthFirstSearch(bst.root);
console.log(result);
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
