class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  isEmpty() {
    return Object.keys(this.adjacencyList).length === 0;
  }

  getSize() {
    return Object.keys(this.adjacencyList).length;
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].add(vertex2);
      this.adjacencyList[vertex2].add(vertex1);
    }
  }
  
  hasEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      return this.adjacencyList[vertex1].has(vertex2);
    }
    return false;
  }
  
  getNeighbors(vertex) {
    if (!this.adjacencyList[vertex]) {
      console.error(`Vertex ${vertex} does not exist.`);
      return null;
    }
    return [...this.adjacencyList[vertex]];
  }
  
  getDegree(vertex) {
    if (!this.adjacencyList[vertex]) {
      console.error(`Vertex ${vertex} does not exist.`);
      return null;
    }
    return this.adjacencyList[vertex].size;
  }
  

  removeEdge(vertex1, vertex2) {
    // Validate both vertices exist
    if (!this.adjacencyList[vertex1]) {
      console.error(`Vertex ${vertex1} does not exist.`);
      return false;
    }
    if (!this.adjacencyList[vertex2]) {
      console.error(`Vertex ${vertex2} does not exist.`);
      return false;
    }
  
    // Check if an edge exists before attempting removal
    if (!this.adjacencyList[vertex1].has(vertex2)) {
      console.warn(`No edge exists between ${vertex1} and ${vertex2}.`);
      return false;
    }
  
    // Remove the edge from both vertices
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
    return true; // Indicate successful removal
  }

  deleteVertex(vertex) {
    // Check if the vertex exists
    if (!this.adjacencyList[vertex]) {
      console.error(`Vertex ${vertex} does not exist.`);
      return false;
    }
  
    // Directly iterate over neighbors and remove edges
    for (let neighbor of this.adjacencyList[vertex]) {
      this.adjacencyList[neighbor].delete(vertex); // Remove the vertex from the neighbor's set
    }
  
    // Delete the vertex from the adjacency list
    delete this.adjacencyList[vertex];
    return true; // Indicate successful deletion
  }
  

  depthFirstSearch(start) {
    const visited = new Set();
    const result = [];
    const stack = [start];
  
    while (stack.length > 0) {
      const vertex = stack.pop();
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
        for (let neighbor of this.adjacencyList[vertex]) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        }
      }
    }
  
    return result;
  }

  
  breadthFirstSearch(start) {
    const visited = new Set();
    const result = [];
    const queue = [start];
  
    while (queue.length > 0) {
      const vertex = queue.shift();
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
        for (let neighbor of this.adjacencyList[vertex]) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
  
    return result;
  }
  

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
}


