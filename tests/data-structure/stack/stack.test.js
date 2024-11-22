
import Stack from "../../../src/data-structure/stack/stack";



describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    test('should initialize an empty stack', () => {
        expect(stack.isEmpty()).toBe(true);
        expect(stack.size()).toBe(0);
    });

    test('should push elements onto the stack', () => {
        stack.push(10);
        stack.push(20);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.size()).toBe(2);
        expect(stack.peek()).toBe(20);
    });

    test('should pop elements from the stack', () => {
        stack.push(10);
        stack.push(20);
        const poppedElement = stack.pop();
        expect(poppedElement).toBe(20);
        expect(stack.size()).toBe(1);
        expect(stack.peek()).toBe(10);
    });

    test('should return null when popping from an empty stack', () => {
        const poppedElement = stack.pop();
        expect(poppedElement).toBeNull();
        expect(stack.isEmpty()).toBe(true);
    });

    test('should return null when peeking an empty stack', () => {
        const peekedElement = stack.peek();
        expect(peekedElement).toBeNull();
        expect(stack.isEmpty()).toBe(true);
    });

    test('should correctly determine the size of the stack', () => {
        stack.push(10);
        stack.push(20);
        stack.push(30);
        expect(stack.size()).toBe(3);
        stack.pop();
        expect(stack.size()).toBe(2);
    });

    test('should correctly print stack elements', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        stack.push(10);
        stack.push(20);
        stack.print();
        expect(consoleSpy).toHaveBeenCalledWith('10,20');
        consoleSpy.mockRestore();
    });
});
