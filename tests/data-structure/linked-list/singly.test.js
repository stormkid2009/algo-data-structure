
import LinkedList from "../../../src/data-structure/linked-list/singly";



describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('should initialize an empty list', () => {
    expect(list.isEmpty()).toBe(true);
    expect(list.getSize()).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test('should prepend nodes to the list', () => {
    list.prepend(10).prepend(20);
    expect(list.print()).toBe('20 -> 10 -> null');
    expect(list.getSize()).toBe(2);
    expect(list.head.value).toBe(20);
    expect(list.tail.value).toBe(10);
  });

  test('should append nodes to the list', () => {
    list.append(10).append(20);
    expect(list.print()).toBe('10 -> 20 -> null');
    expect(list.getSize()).toBe(2);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(20);
  });

  test('should insert a node at a specific index', () => {
    list.append(10).append(20).append(30);
    list.insert(15, 1);
    expect(list.print()).toBe('10 -> 15 -> 20 -> 30 -> null');
    expect(list.getSize()).toBe(4);
  });

  test('should throw an error when inserting at an invalid index', () => {
    expect(() => list.insert(10, -1)).toThrow('Invalid index -1');
    expect(() => list.insert(10, 1)).toThrow('Invalid index 1');
  });

  test('should remove a node at a specific index', () => {
    list.append(10).append(20).append(30);
    const removedValue = list.remove(1);
    expect(removedValue).toBe(20);
    expect(list.print()).toBe('10 -> 30 -> null');
    expect(list.getSize()).toBe(2);
  });

  test('should throw an error when removing at an invalid index', () => {
    expect(() => list.remove(-1)).toThrow('Invalid index -1');
    expect(() => list.remove(1)).toThrow('Invalid index 1');
  });

  test('should remove nodes by value', () => {
    list.append(10).append(20).append(30);
    const removedValue = list.removeByValue(20);
    expect(removedValue).toBe(20);
    expect(list.print()).toBe('10 -> 30 -> null');
    expect(list.getSize()).toBe(2);
  });

  test('should return null when removing a non-existing value', () => {
    list.append(10).append(20).append(30);
    const result = list.removeByValue(40);
    expect(result).toBeNull();
    expect(list.print()).toBe('10 -> 20 -> 30 -> null');
  });

  test('should reverse the list', () => {
    list.append(10).append(20).append(30);
    list.reverse();
    expect(list.print()).toBe('30 -> 20 -> 10 -> null');
    expect(list.head.value).toBe(30);
    expect(list.tail.value).toBe(10);
  });

  test('should throw an error when reversing an empty list', () => {
    expect(() => list.reverse()).toThrow('List is empty');
  });

  test('should search for a value and return its index', () => {
    list.append(10).append(20).append(30);
    expect(list.search(20)).toBe(1);
    expect(list.search(40)).toBe(-1);
  });

  test('should print the list as a string', () => {
    expect(list.print()).toBe('List is empty');
    list.append(10).append(20);
    expect(list.print()).toBe('10 -> 20 -> null');
  });
});
