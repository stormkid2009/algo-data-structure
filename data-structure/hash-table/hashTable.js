import checkPrime from "../../algorithms/various/primeNum.js";

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
        this.size = size;
        this.itemCount = 0; // keep track of the number of sorted items
        this.loadFactorThreshold = 0.7;
    }

    _hash(key) {
        let hash = 5381;  //special constant for the hash algorithm
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 33) ^ key.charCodeAt(i);
        }
        // Ensure hash is a positive integer and fit within the table size
        return (hash >>> 0) % this.size;
    }

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

    _findNextPrime(num) {
        while (!checkPrime(num)) {
            num++;
        }
        return num;
    }

    set(key, value) {
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
    }

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

    remove(key) {
        const index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    delete this.keyMap[index][i];
                    if (this.keyMap[index].length === 1) {
                        delete this.keyMap[index];
                    }
                    this.itemCount--;
                    return true;
                }
            }
        }
        return false;
    }

    display() {
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                console.log(i, this.keyMap[i]);
            }
        }
    }
}

let table = new HashTable();

table.set("hello", "world");
table.set("foo", "bar");
table.set('oof', 'rab');
table.set('ofo', 'arb');
table.set("good morning", "bonjour");
table.set("good afternoon", "bonsoir");
table.set("good night", "bonne nuit");
console.log(table.set("hello", "salut"));
table.display();
table.remove("hello");
console.log(`***************`);
table.display();

