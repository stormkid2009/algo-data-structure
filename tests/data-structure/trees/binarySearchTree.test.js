
import BinarySearchTree from "../../../src/data-structure/trees/binarySearchTree";

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('should initialize an empty tree', () => {
    expect(bst.isEmpty()).toBe(true);
    expect(bst.root).toBeNull();
  });

  test('should insert nodes into the tree correctly', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
  });

  test('should insert nodes iteratively', () => {
    bst.insertIterative(10);
    bst.insertIterative(5);
    bst.insertIterative(15);
    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
  });

  test('should search for existing and non-existing values', () => {
    bst.insert(10).insert(5).insert(15);
    expect(bst.search(bst.root, 10)).toBe(true);
    expect(bst.search(bst.root, 5)).toBe(true);
    expect(bst.search(bst.root, 20)).toBe(false);
  });

  test('should find the minimum and maximum values', () => {
    bst.insert(10).insert(5).insert(15).insert(2).insert(17);
    expect(bst.min(bst.root).value).toBe(2);
    expect(bst.max(bst.root).value).toBe(17);
  });

  test('should find the minimum and maximum values iteratively', () => {
    bst.insert(10).insert(5).insert(15).insert(2).insert(17);
    expect(bst.minIterative().value).toBe(2);
    expect(bst.maxIterative().value).toBe(17);
  });

  test('should perform pre-order traversal', () => {
    const log = jest.spyOn(console, 'log').mockImplementation();
    bst.insert(10).insert(5).insert(15);
    bst.preOrder(bst.root);
    expect(log).toHaveBeenCalledWith(10);
    expect(log).toHaveBeenCalledWith(5);
    expect(log).toHaveBeenCalledWith(15);
    log.mockRestore();
  });

  test('should perform in-order traversal', () => {
    const log = jest.spyOn(console, 'log').mockImplementation();
    bst.insert(10).insert(5).insert(15);
    bst.inOrder(bst.root);
    expect(log).toHaveBeenCalledWith(5);
    expect(log).toHaveBeenCalledWith(10);
    expect(log).toHaveBeenCalledWith(15);
    log.mockRestore();
  });

  test('should perform post-order traversal', () => {
    const log = jest.spyOn(console, 'log').mockImplementation();
    bst.insert(10).insert(5).insert(15);
    bst.postOrder(bst.root);
    expect(log).toHaveBeenCalledWith(5);
    expect(log).toHaveBeenCalledWith(15);
    expect(log).toHaveBeenCalledWith(10);
    log.mockRestore();
  });

  test('should perform breadth-first search', () => {
    bst.insert(10).insert(5).insert(15).insert(2).insert(7);
    const levels = bst.breadthFirstSearch(bst.root);
    expect(levels).toEqual([[10], [5, 15], [2, 7]]);
  });

  test('should delete a leaf node', () => {
    bst.insert(10).insert(5).insert(15);
    bst.delete(15);
    expect(bst.root.right).toBeNull();
  });

  test('should delete a node with one child', () => {
    bst.insert(10).insert(5).insert(15).insert(12);
    bst.delete(15);
    expect(bst.root.right.value).toBe(12);
  });

  test('should delete a node with two children', () => {
    bst.insert(10).insert(5).insert(15).insert(12).insert(20);
    bst.delete(15);
    expect(bst.root.right.value).toBe(20);
    expect(bst.root.right.left.value).toBe(12);
  });

  test('should calculate the height of the tree', () => {
    bst.insert(10).insert(5).insert(15).insert(2).insert(12).insert(20);
    expect(bst.height()).toBe(2);
  });

  test('should check if the tree is balanced', () => {
    bst.insert(10).insert(5).insert(15);
    expect(bst.isBalanced()).toBe(true);

    bst.insert(20).insert(25);
    expect(bst.isBalanced()).toBe(false);
  });

  test('should count the total number of nodes', () => {
    bst.insert(10).insert(5).insert(15).insert(2);
    expect(bst.countNodes()).toBe(4);
  });

  test('should find the parent of a given node', () => {
    bst.insert(10).insert(5).insert(15).insert(2).insert(7);
    expect(bst.findParent(15).value).toBe(10);
    expect(bst.findParent(2).value).toBe(5);
    expect(bst.findParent(10)).toBeNull();
  });
});
