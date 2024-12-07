
import Graph  from "../../../src/data-structure/graph/graph";



describe('Graph class', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('isEmpty should return true for an empty graph', () => {
    expect(graph.isEmpty()).toBe(true);
  });

  test('isEmpty should return false for a non-empty graph', () => {
    graph.addVertex('A');
    expect(graph.isEmpty()).toBe(false);
  });

  test('getSize should return the correct size of the graph', () => {
    expect(graph.getSize()).toBe(0);
    graph.addVertex('A');
    graph.addVertex('B');
    expect(graph.getSize()).toBe(2);
  });

  test('addVertex should add vertices to the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    expect(graph.adjacencyList).toHaveProperty('A');
    expect(graph.adjacencyList).toHaveProperty('B');
  });

  test('addEdge should add edges between vertices', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    expect(graph.hasEdge('A', 'B')).toBe(true);
    expect(graph.hasEdge('B', 'A')).toBe(true);
  });

  test('getNeighbors should return the correct neighbors of a vertex', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    expect(graph.getNeighbors('A')).toEqual(expect.arrayContaining(['B', 'C']));
  });

  test('getDegree should return the correct degree of a vertex', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    expect(graph.getDegree('A')).toBe(1);
    expect(graph.getDegree('B')).toBe(1);
  });

  test('removeEdge should remove the edge between two vertices', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    graph.removeEdge('A', 'B');
    expect(graph.hasEdge('A', 'B')).toBe(false);
  });

  test('deleteVertex should remove a vertex and its edges', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    graph.deleteVertex('A');
    expect(graph.adjacencyList).not.toHaveProperty('A');
    expect(graph.getNeighbors('B')).not.toContain('A');
  });

  test('depthFirstSearch should return correct DFS order', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    expect(graph.depthFirstSearch('A')).toEqual(expect.arrayContaining(['A', 'B', 'C', 'D']));
  });

  test('breadthFirstSearch should return correct BFS order', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    expect(graph.breadthFirstSearch('A')).toEqual(expect.arrayContaining(['A', 'B', 'C', 'D']));
  });

  test('hasCycle should detect a cycle in the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'A');
    expect(graph.hasCycle()).toBe(true);
  });

  test('hasCycle should return false for an acyclic graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    expect(graph.hasCycle()).toBe(false);
  });

  test('shortestPath should return the correct path between two vertices', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    expect(graph.shortestPath('A', 'C')).toEqual(['A', 'B', 'C']);
  });

  test('isConnected should return true for a connected graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B');
    expect(graph.isConnected()).toBe(true);
  });

  test('isBipartite should return true for a bipartite graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    expect(graph.isBipartite()).toBe(true);
  });
});
