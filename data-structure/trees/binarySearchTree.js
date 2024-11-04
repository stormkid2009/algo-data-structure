

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
        
        
}


const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);
console.log(bst.search(bst.root, 30)); // expected true
console.log(bst.search(bst.root, 100)); // expected false
console.log(bst.search(bst.root, 70)); // expected true
console.log(bst.search(bst.root, 60)); // expected true
console.log(bst.search(bst.root, 10)); // expected false
console.log(bst.search(bst.root, 10)); // expected false
console.log(bst.search(bst.root, 10)); // expected false