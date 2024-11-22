import {checkPrime} from "../../../src/algorithms/various/primeNum.js";
const DEFAULT_SIZE = 53;
const DEFAULT_LOAD_FACTOR_THRESHOLD = 0.7;
const INTIAL_HASH = 5381;
// Time complexity O(1)

class HashTable {
    /**
     * Constructs a new HashTable object.
     * 
     * @param {number} [size=DEFAULT_SIZE] - The size of the hash table. Must be a prime number.
     */
    constructor(size = DEFAULT_SIZE) {
        this.keyMap = new Array(size);
        this.size = size;
        this.itemCount = 0; // keep track of the number of sorted items
        this.loadFactorThreshold = DEFAULT_LOAD_FACTOR_THRESHOLD;
    }

    /**
     * Private method to hash the given key.
     * 
     * The hash function is taken from the book "Algorithms" by Robert Sedgewick and Kevin Wayne.
     * It is a variant of the djb2 algorithm, which is a simple string hash function.
     * 
     * @param {string} key - the key to hash
     * @return {number} the hash value, which is a positive integer between 0 and this.size - 1
     */
    _hash(key) {
        let hash = INTIAL_HASH;  //special constant for the hash algorithm
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 33) ^ key.charCodeAt(i);
        }
        // Ensure hash is a positive integer and fit within the table size
        return (hash & 0x7fffffff) % this.size;
    }

    /**
     * Resizes the hash table to a new size that is twice the current size, 
     * by rehashing all the existing key-value pairs into the new table.
     * 
     * This method is called when the load factor (itemCount / size) exceeds the loadFactorThreshold.
     * It is used to maintain a good balance between the time complexity of the hash table operations 
     * and the memory usage.
     * 
     * @private
     */
    _resize() {
        const newSize = this._findNextPrime(this.size * 2);
        const oldKeyMap = this.keyMap;
        this.keyMap = new Array(newSize);
        this.size = newSize;
        this.itemCount = 0;

        for (let bucket of oldKeyMap) {
            if (bucket) {
                for (let[key, value] of bucket) {
                    this.set(key, value);
                }
            }
        }
    }

    /**
     * Finds the next prime number after the given number.
     * 
     * This method is used in the _resize method to find the next prime number
     * as the new size of the hash table.
     * 
     * @param {number} num - the number to find the next prime after
     * @return {number} the next prime number after the given number
     * @private
     */
    _findNextPrime(num) {
        while (!checkPrime(num)) {
            num++;
        }
        return num;
    }

    /**
     * Adds a new key-value pair to the hash table, or updates an existing key-value pair.
     * 
     * @param {string} key - the key to add or update
     * @param {*} value - the value to add or update
     * @return {this} the hash table instance
     * @throws {Error} if the key is not a string
     */
    set(key, value) {
        if(typeof key !== 'string') {
            throw new Error('Keys must be strings');
        }
        const index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        for(let i=0; i<this.keyMap[index].length; i++) {
            if(this.keyMap[index][i][0] === key) {
                this.keyMap[index][i][1] = value;
                return `existing key ${key} has been updated`;
            }
        }
        this.keyMap[index].push([key, value]);
        this.itemCount++;

        if (this.itemCount / this.size > this.loadFactorThreshold) {
            this._resize();
        }
        return this;
    }

    
    /**
     * Checks if the specified key exists in the hash table.
     * 
     * @param {string} key - The key to check for existence in the hash table.
     * @return {boolean} Returns true if the key exists, otherwise false.
     */
    has(key) {
        const index = this._hash(key);
        if (this.keyMap[index]) {
            for (let bucket of this.keyMap[index]) {
                if (bucket[0] === key) {
                    return true;
                }
            }
        }
        return false;
    }

    
    /**
     * Retrieves the value associated with the specified key in the hash table.
     * 
     * @param {string} key - The key to retrieve the associated value from the hash table.
     * @return {*} The value associated with the key or undefined if the key does not exist.
     */
    get(key) {
        const index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    /**
     * Removes the specified key-value pair from the hash table.
     * 
     * @param {string} key - The key to remove from the hash table.
     * @return {boolean} Returns true if the key-value pair was removed, false if the key was not found.
     */
    remove(key) {
        const index = this._hash(key);
        const bucket = this.keyMap[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1);
                    this.itemCount--;
                    
                    // If the bucket is empty, set it back to an empty array instead of deleting
                    if (bucket.length === 0) {
                        this.keyMap[index] = [];
                    }
                    return true;
                }
            }
        }
        return false;
    }


    /**
     * Clears the hash table, removing all key-value pairs.
     * 
     * This method is more efficient than calling {@link HashTable#remove} for each key-value pair,
     * as it does not need to search for each key-value pair.
     */
    clear() {
        this.keyMap = new Array(this.size);
        this.itemCount = 0;
    }


    /**
     * Gets the number of items currently stored in the hash table.
     * 
     * @return {number} The number of items currently stored in the hash table.
     */
    getItemsCount() {
        return this.itemCount;
    }


    /**
     * Gets an array of all the keys currently stored in the hash table.
     * 
     * @return {string[]} An array of all the keys currently stored in the hash table.
     */
    keys() {
        const keys = [];
        for (let bucket of this.keyMap) {
            if (bucket) {
                for (let [key] of bucket) {
                    keys.push(key);
                }
            }
        }
        return keys;
    }

    /**
     * Gets an array of all the values currently stored in the hash table.
     * 
     * @return {Array<*>} An array of all the values currently stored in the hash table.
     */
    values() {
        const values = new Set();
        for (let bucket of this.keyMap) {
            if (bucket) {
                for (let [, value] of bucket) {
                    values.add(value);
                }
            }
        }
        return Array.from(values); // Convert the Set to an array of values
    }


    /**
     * Gets an array of all the key-value pairs currently stored in the hash table.
     * 
     * @return {Array<[string, *]>} An array of all the key-value pairs currently stored in the hash table.
     */
    entries() {
        const entries = [];
        for (let bucket of this.keyMap) {
            if (bucket) {
                for (let [key, value] of bucket) {
                    entries.push([key, value]);
                }
            }
        }
        return entries;
    }


    /**
     * Displays the hash table.
     * 
     * Prints each bucket of the hash table to the console, with the index and the
     * key-value pairs in the bucket.
     * 
     * This method is not part of the public API and should not be used by users of the
     * class. It is intended for debugging purposes only.
     */
    display() {
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                console.log(i, this.keyMap[i]);
            }
        }
    }
}




export default HashTable;
