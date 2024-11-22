


import LinkedList from "../../../src/data-structure/linked-list/doubly";

describe('Doubly Linked List', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('isEmpty() should return true for a new list', () => {
    expect(list.isEmpty()).toBe(true);
    expect(list.getSize()).toBe(0);
  });

  test('append() should add elements to the end of the list', () => {
    list.append(1).append(2).append(3);
    expect(list.getSize()).toBe(3);
    expect(list.print()).toBe('null <- -> 1 <- -> 2 <- -> 3 <- -> null');
  });

  test('prepend() should add elements to the start of the list', () => {
    list.prepend(1).prepend(2).prepend(3);
    expect(list.getSize()).toBe(3);
    expect(list.print()).toBe('null <- -> 3 <- -> 2 <- -> 1 <- -> null');
  });

  test('insert() should insert elements at the correct index', () => {
    list.append(1).append(3);
    list.insert(2, 1);
    expect(list.getSize()).toBe(3);
    expect(list.print()).toBe('null <- -> 1 <- -> 2 <- -> 3 <- -> null');
  });

  test('insert() should throw an error for invalid index', () => {
    expect(() => list.insert(1, -1)).toThrow('Invalid index');
    expect(() => list.insert(1, 2)).toThrow('Invalid index');
  });

  test('remove() should remove elements at a given index', () => {
    list.append(1).append(2).append(3);
    expect(list.remove(1)).toBe(2);
    expect(list.getSize()).toBe(2);
    expect(list.print()).toBe('null <- -> 1 <- -> 3 <- -> null');
  });

  test('remove() should throw an error for invalid index', () => {
    expect(() => list.remove(-1)).toThrow('Invalid index');
    expect(() => list.remove(0)).toThrow('Invalid index'); // List is empty initially
  });

  test('removeByValue() should remove the first occurrence of a value', () => {
    list.append(1).append(2).append(3).append(2);
    expect(list.removeByValue(2)).toBe(2);
    expect(list.getSize()).toBe(3);
    expect(list.print()).toBe('null <- -> 1 <- -> 3 <- -> 2 <- -> null');
  });

  test('removeByValue() should return null if the value is not found', () => {
    list.append(1).append(2).append(3);
    expect(list.removeByValue(4)).toBe(null);
    expect(list.getSize()).toBe(3);
  });

  test('search() should return the correct index of a value', () => {
    list.append(1).append(2).append(3);
    expect(list.search(2)).toBe(1);
    expect(list.search(4)).toBe(-1);
  });

  test('reverse() should reverse the list', () => {
    list.append(1).append(2).append(3);
    list.reverse();
    expect(list.print()).toBe('null <- -> 3 <- -> 2 <- -> 1 <- -> null');
  });

  test('print() should return a string representation of the list', () => {
    expect(list.print()).toBe('null <- -> null');
    list.append(1).append(2);
    expect(list.print()).toBe('null <- -> 1 <- -> 2 <- -> null');
  });

  test('remove() should update head and tail properly', () => {
    list.append(1).append(2).append(3);
    list.remove(0); // Remove head
    expect(list.head.value).toBe(2);
    list.remove(1); // Remove tail
    expect(list.tail.value).toBe(2);
  });
});
