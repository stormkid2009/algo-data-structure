import HashTable from "../../../src/data-structure/hash-table/hashTable";
// import { checkPrime } from "../../../src/algorithms/various/primeNum";


describe('HashTable', () => {
    let hashTable;

    beforeEach(() => {
        hashTable = new HashTable();
    });

    test('should initialize an empty hash table', () => {
        expect(hashTable.getItemsCount()).toBe(0);
        expect(hashTable.keys()).toEqual([]);
        expect(hashTable.values()).toEqual([]);
        expect(hashTable.entries()).toEqual([]);
    });

    test('should add key-value pairs to the hash table', () => {
        hashTable.set('key1', 'value1');
        hashTable.set('key2', 'value2');
        expect(hashTable.get('key1')).toBe('value1');
        expect(hashTable.get('key2')).toBe('value2');
        expect(hashTable.getItemsCount()).toBe(2);
    });

    test('should update value for an existing key', () => {
        hashTable.set('key1', 'value1');
        const updateMessage = hashTable.set('key1', 'updatedValue1');
        expect(hashTable.get('key1')).toBe('updatedValue1');
        expect(updateMessage).toBe('existing key key1 has been updated');
    });

    test('should retrieve the correct value for a given key', () => {
        hashTable.set('key1', 'value1');
        expect(hashTable.get('key1')).toBe('value1');
        expect(hashTable.get('nonexistentKey')).toBeUndefined();
    });

    test('should check if a key exists in the hash table', () => {
        hashTable.set('key1', 'value1');
        expect(hashTable.has('key1')).toBe(true);
        expect(hashTable.has('nonexistentKey')).toBe(false);
    });

    test('should remove a key-value pair from the hash table', () => {
        hashTable.set('key1', 'value1');
        const removed = hashTable.remove('key1');
        expect(removed).toBe(true);
        expect(hashTable.get('key1')).toBeUndefined();
        expect(hashTable.getItemsCount()).toBe(0);
    });

    test('should return false when trying to remove a nonexistent key', () => {
        const removed = hashTable.remove('nonexistentKey');
        expect(removed).toBe(false);
    });

    test('should clear the hash table', () => {
        hashTable.set('key1', 'value1');
        hashTable.set('key2', 'value2');
        hashTable.clear();
        expect(hashTable.getItemsCount()).toBe(0);
        expect(hashTable.keys()).toEqual([]);
        expect(hashTable.values()).toEqual([]);
        expect(hashTable.entries()).toEqual([]);
    });

    test('should resize the hash table when the load factor exceeds the threshold', () => {
        const initialSize = hashTable.size;
        for (let i = 0; i < 40; i++) {
            hashTable.set(`key${i}`, `value${i}`);
        }
        expect(hashTable.size).toBeGreaterThan(initialSize);
    });

    test('should return all keys, values, and entries', () => {
        hashTable.set('key1', 'value1');
        hashTable.set('key2', 'value2');
        expect(hashTable.keys()).toEqual(expect.arrayContaining(['key1', 'key2']));
        expect(hashTable.values()).toEqual(expect.arrayContaining(['value1', 'value2']));
        expect(hashTable.entries()).toEqual(
            expect.arrayContaining([
                ['key1', 'value1'],
                ['key2', 'value2'],
            ])
        );
    });

    test('should display the hash table (for debugging)', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        hashTable.set('key1', 'value1');
        hashTable.display();
        expect(consoleSpy).toHaveBeenCalled();
        consoleSpy.mockRestore();
    });

    test('should throw an error when setting a non-string key', () => {
        expect(() => hashTable.set(123, 'value')).toThrow('Keys must be strings');
    });
});
