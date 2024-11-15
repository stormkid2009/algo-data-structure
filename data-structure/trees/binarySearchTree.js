
class Node {
/**
 * Node constructor.
 * Initializes a new node with a given value. 
 * The left and right child nodes are set to null initially.
 *
 * @param {*} value - The value to be stored in this node.
 */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  /**
   * Constructs an empty Binary Search Tree.
   * 
   * The root of the tree is initialized to null, indicating that the tree
   * is initially empty.
   */
  constructor() {
    this.root = null;
  }

  /**
   * Checks if the binary search tree is empty.
   * 
   * @returns {boolean} true if the tree is empty, false otherwise.
   */
  isEmpty() {
    return this.root === null;
  }
  // binary search tree rules
  // 1. left node value < parent node value
  // 2. right node value > parent node value

  
  /**
   * Inserts a new node with the given value into the binary search tree.
   * 
   * This method implements the basic insertion algorithm for a binary search tree.
   * It recursively traverses the tree, finding the correct position to insert the new node.
   * 
   * @param {*} value - The value to be inserted into the tree.
   * @returns {BinarySearchTree} This tree for chaining purposes.
   */
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
      return this;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  /**
   * Inserts a new node into the tree at the correct position.
   * 
   * This private method is called by the public insert method. It recursively
   * traverses the tree, finding the correct position to insert the new node.
   * 
   * @private
   * @param {Node} node - The current node being visited.
   * @param {Node} newNode - The new node to be inserted.
   */
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

  
  /**
   * Inserts a new node with the given value into the binary search tree using an iterative approach.
   * 
   * This method iteratively traverses the tree to find the correct position for the new node.
   * It starts from the root and moves downwards, comparing the value to be inserted with the current node's value,
   * and chooses the left or right child based on the comparison, until an appropriate null child is found.
   * 
   * @param {*} value - The value to be inserted into the tree.
   * @returns {BinarySearchTree} This tree for chaining purposes.
   */
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

  /**
   * Searches for a node with the specified value in the binary search tree.
   *
   * This method recursively traverses the tree, comparing the given value with
   * the current node's value and choosing the left or right subtree based on
   * the comparison.
   *
   * @param {Node} node - The current node being visited.
   * @param {*} value - The value to search for in the tree.
   * @returns {boolean} true if a node with the specified value is found, false otherwise.
   */
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

  // Depth First Search implementation methods: preOrder, inOrder, postOrder
  
/**
 * Performs a pre-order traversal of the binary search tree.
 * 
 * This method visits the root node first, then recursively visits the left subtree,
 * followed by the right subtree.
 * 
 * @param {Node} node - The current node being visited in the traversal.
 */
  preOrder(node) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  /**
   * Performs a pre-order traversal of the binary search tree iteratively.
   * 
   * This method uses a stack to store nodes to be visited. It starts by pushing the root node onto the stack,
   * then pops a node from the stack, logging its value and pushing its right and left children onto the stack.
   * This process is repeated until the stack is empty.
   * 
   * @param {Node} node - The root node of the binary search tree.
   */
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

  /**
   * Performs an in-order traversal of the binary search tree recursively.
   * 
   * This method visits the left subtree first, then the root node, and finally the right subtree.
   * 
   * @param {Node} node - The current node being visited in the traversal.
   */
  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

/**
 * Performs a post-order traversal of the binary search tree.
 * 
 * This method recursively visits the left subtree, then the right subtree,
 * and finally the root node, logging each node's value.
 * 
 * @param {Node} node - The current node being visited in the traversal.
 */
  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }

  // Breadth First Search method

  /**
   * Performs a breadth-first search of the binary search tree.
   * 
   * This method returns an array of arrays, where each subarray contains the node values at a given level
   * in the tree, starting from the root node.
   * 
   * @param {Node} node - The root node of the binary search tree.
   * @returns {Array<Array<*>} An array of arrays, where each subarray contains node values at a given level.
   */
  breadthFirstSearch(node) {
    if (!node) return [];
    const queue = [node];
    const results = [];
    while(queue.length) {
      const level = [];
      let levelSize = queue.length;
      for (let i = 0; i < levelSize; i++) {
        const current = queue.shift();
        level.push(current.value);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
      results.push(level);
    }
    return results;
  }
  // find min value and max value in the tree
  
/**
 * Recursively finds the node with the minimum value in the binary search tree.
 *
 * This method traverses the left subtree of the given node until it reaches
 * the leftmost node, which contains the minimum value in the subtree.
 *
 * @param {Node} node - The current node being visited.
 * @returns {Node} The node with the minimum value in the subtree.
 */
  min(node) {
    if (!node.left) {
      return node; // return the node if there is no left node
    }
    return this.min(node.left);
  }

  // Find minimum value node iteratively
  
  /**
   * Iteratively finds the node with the minimum value in the binary search tree.
   *
   * This method traverses the left subtree of the given node until it reaches
   * the leftmost node, which contains the minimum value in the subtree.
   *
   * @param {Node} [node=this.root] - The current node being visited.
   * @returns {Node} The node with the minimum value in the subtree.
   */
  minIterative(node = this.root) {
    while (node && node.left) node = node.left;
    return node;
  }

  /**
   * Recursively finds the node with the maximum value in the binary search tree.
   *
   * This method traverses the right subtree of the given node until it reaches
   * the rightmost node, which contains the maximum value in the subtree.
   *
   * @param {Node} node - The current node being visited.
   * @returns {Node} The node with the maximum value in the subtree.
   */
  max(node) {
    if (!node.right) {
      return node; // return the node if there is no right node
    }
    return this.max(node.right);
  }

/**
 * Iteratively finds the node with the maximum value in the binary search tree.
 *
 * This method traverses the right subtree of the given node until it reaches
 * the rightmost node, which contains the maximum value in the subtree.
 *
 * @param {Node} [node=this.root] - The current node being visited.
 * @returns {Node} The node with the maximum value in the subtree.
 */
  maxIterative(node = this.root) {
    while (node && node.right) node = node.right;
    return node;
  }

  // delete a node from the tree

  /**
   * Deletes the node with the given value from the binary search tree.
   *
   * @param {*} value - The value of the node to be deleted.
   * @returns {BinarySearchTree} This tree for chaining purposes.
   */
  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

/**
 * Deletes a node with a specified value from the binary search tree.
 *
 * This private method recursively traverses the tree to find the node with the given value. 
 * If the node is found, it handles four cases:
 * 1. If the node is a leaf (no children), it returns null to delete the node.
 * 2. If the node has one child on the right, it returns the right child to replace the node.
 * 3. If the node has one child on the left, it returns the left child to replace the node.
 * 4. If the node has two children, it finds the inorder successor (the smallest node in the right subtree),
 *    replaces the value of the node to be deleted with the successor's value, and then deletes the successor.
 *
 * @param {Node} node - The current node being visited.
 * @param {*} value - The value to be deleted from the tree.
 * @returns {Node|null} The root of the modified subtree or null if the node is deleted.
 */
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

  /**
   * Calculates the height of the tree.
   * 
   * The height of a tree is the number of edges between the root node and the furthest leaf node.
   * An empty tree has a height of -1.
   * 
   * @param {Node} [node=this.root] - The node whose height to calculate.
   * @returns {number} The height of the tree.
   */
  height(node = this.root) {
    if (!node) return -1;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  // check if tree is balanced

  /**
   * Checks if the tree is balanced.
   * 
   * A tree is balanced if the difference of the heights of its left and right subtrees
   * is at most 1.
   * 
   * @param {Node} [node=this.root] - The node whose balance to check.
   * @returns {boolean} true if the tree is balanced, false otherwise.
   */
  isBalanced(node = this.root) {
    if (!node) return true;
    const difference = Math.abs(
      this.height(node.left) - this.height(node.right)
    );
    if (difference > 1) return false;
    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  // find parent of a node the code works good for any kind of binary tree
  
  /**
   * Finds the parent of a given node in the tree.
   * 
   * This method works for any kind of binary tree.
   * 
   * @param {*} value - The value of the node whose parent to find.
   * @param {Node} [node=this.root] - The current node being visited.
   * @param {Node} [parent=null] - The parent node of the current node.
   * @returns {Node|null} The parent node of the given node, or null if the node is not found.
   */
  findParent(value, node = this.root, parent = null) {
    if (!node) return null;
    if (node.value === value) return parent;
    return (
      this.findParent(value, node.left, node) ||
      this.findParent(value, node.right, node)
    );
  }

  /**
   * Finds the parent of a given node in the tree.
   * 
   * This method works for a binary search tree (BST).
   * 
   * @param {*} value - The value of the node whose parent to find.
   * @param {Node} [node=this.root] - The current node being visited.
   * @param {Node} [parent=null] - The parent node of the current node.
   * @returns {Node|null} The parent node of the given node, or null if the node is not found.
   */
  findParentBST(value, node = this.root, parent = null) {
    if (!node) return null;
    if (node.value === value) return parent;
    if (value < node.value) {
      return this.findParentBST(value, node.left, node);
    } else {
      return this.findParentBST(value, node.right, node);
    }
  }

  /**
   * Recursively counts the total number of nodes in the tree.
   * 
   * @param {Node} [node=this.root] - The current node being visited.
   * @returns {number} The total number of nodes in the tree.
   */
  countNodes(node = this.root) {
    if (!node) return 0;
    return (
      1 +
      this.countNodes(node.left) +
      this.countNodes(node.right)
    );
  }
}

module.exports = BinarySearchTree;
