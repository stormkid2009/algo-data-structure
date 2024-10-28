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
        return (hash & 0x7fffffff) % this.size;
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
        return this;
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


    display() {
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                console.log(i, this.keyMap[i]);
            }
        }
    }
}

let table = new HashTable();

table.set("eg", "Egypt");
table.set("br", "Brazil");
table.set('us', 'united states');
table.set('fr', 'France');
table.set("ru", "Russia");
table.set("de", "Germany");
table.set("it", "Italy");
table.set("sp", "Spain");
table.set("jp", "Japan");
table.set("ch", "China");
table.set("in", "India");
table.set("uk", "United Kingdom");
table.set("au", "Australia");
table.set("ca", "Canada");
table.set("nz", "New Zealand");
table.set("eu", "Europe");
table.set("us", "America");
table.set("uk", "United Kingdom");

// table.display();
// table.remove("hello");
// console.log(`***************`);
// table.display();
console.log(table.keys());
console.log(`*******************`)
console.log(table.values());
export default HashTable;
