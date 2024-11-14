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
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
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
          break;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
    return this;
  }

  search(node, value) {
    if (!node) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    return value < node.value
      ? this.search(node.left, value)
      : this.search(node.right, value);
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
    if (!node) return [];
    const queue = [node];
    const results = [];
    for (let i = 0; i < queue.length; i++) {
      const current = queue[i];
      results.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return results;
  }
  // find min value and max value in the tree
  min(node) {
    if (!node.left) {
      return node; // return the node if there is no left node
    }
    return this.min(node.left);
  }

  // Find minimum value node
  minIterative(node = this.root) {
    while (node && node.left) node = node.left;
    return node;
  }

  max(node) {
    if (!node.right) {
      return node; // return the node if there is no right node
    }
    return this.max(node.right);
  }

  maxIterative(node = this.root) {
    while (node && node.right) node = node.right;
    return node;
  }

  // delete a node from the tree

  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  _deleteNode(node, value) {
    if (!node) {
      return null;
    }
    if (value < node.value) {
      node.left = this._deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._deleteNode(node.right, value);
    } else {
      // found the node to be deleted
      // case 1: node has no children leaf node
      if (!node.left && !node.right) {
        return null;
      }
      // case 2: node has one child on the right
      if (!node.left) {
        return node.right;
      }
      // case 3: node has one child on the left
      if (!node.right) {
        return node.left;
      }
      // case 4: node has two children
      // Node with two children: get the inorder successor (smallest in the right subtree)
      let minNode = this.min(node.right);
      node.value = minNode.value; // replace value
      node.right = this._deleteNode(node.right, minNode.value); // delete successor
    }
    return node; // return the modified subtree root
  }

  // calculate height of the tree

  height(node = this.root) {
    if (!node) return -1;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  // check if tree is balanced

  isBalanced(node = this.root) {
    if (!node) return true;
    const difference = Math.abs(
      this.height(node.left) - this.height(node.right)
    );
    if (difference > 1) return false;
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  // find parent of a node the code works good for any kind of binary tree
  findParent(value, node = this.root, parent = null) {
    if (!node) return null;
    if (node.value === value) return parent;
    return (
      this.findParent(value, node.left, node) ||
      this.findParent(value, node.right, node)
    );
  }

  findParentBST(value, node = this.root, parent = null) {
    if (!node) return null;
    if (node.value === value) return parent;
    if (value < node.value) {
      return this.findParentBST(value, node.left, node);
    } else {
      return this.findParentBST(value, node.right, node);
    }
  }

  countNodes(node = this.root) {
    if (!node) return 0;
    return (
      1 +
      this.countNodes(node.left) +
      this.countNodes(node.right)
    );
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
// console.log(bst.height(bst.root));
// console.log(bst.isBalanced(bst.root));
console.log(bst.findParent(60, bst.root));
console.log(`number of nodes in the tree ${bst.countNodes(bst.root)}`);
