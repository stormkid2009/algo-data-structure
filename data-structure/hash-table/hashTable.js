


// hash function
function hashStringToInt(s, tableSize) {
    let hash = 5381;  //special constant for the hash algorithm
    for (let i = 0; i < s.length; i++) {
        hash = (hash * 33) ^ s.charCodeAt(i);
    }
    // Ensure hash is a positive integer and fit within the table size
    return Math.abs(hash) % tableSize;
}

// Example usage
const key = "exampleKey";
const tableSize = 100;
const hashValue = hashStringToInt(key, tableSize);
console.log(`Hash value for "${key}" is: `, hashValue);