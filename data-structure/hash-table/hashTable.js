
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
        this.size = size;
    }

    _hash(key) {
        let hash = 5381;  //special constant for the hash algorithm
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 33) ^ key.charCodeAt(i);
        }
        // Ensure hash is a positive integer and fit within the table size
        return Math.abs(hash) % this.size;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
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
}

let table = new HashTable();

table.set("hello", "world");
table.set("foo", "bar");
console.log(table.get("hello")); // Output: world
console.log(table.get("foo")); // Output: bar
console.log(table.get("eg")); // Output: undefined


