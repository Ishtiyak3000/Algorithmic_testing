const {
  bfs,
  dfs,
  dijkstra,
  kruskal,
  prim,
  floydWarshall,
} = require("../../algorithms/graph/graph");

describe("BFS", () => {
  test("simple graph traversal", () => {
    const graph = { 0: [1, 2], 1: [2], 2: [0, 3], 3: [3] };
    expect(bfs(2, graph)).toEqual([2, 0, 3, 1]);
  });

  test("start node not in graph returns empty array", () => {
    expect(bfs(5, { 0: [1], 1: [0] })).toEqual([]);
  });

  test("graph with single node", () => {
    const graph = { 0: [] };
    expect(bfs(0, graph)).toEqual([0]);
  });

  test("graph with disconnected nodes", () => {
    const graph = { 0: [1], 1: [], 2: [] };
    expect(bfs(0, graph)).toEqual([0, 1]);
  });

  test("BFS result should not equal wrong order", () => {
    const graph = { 0: [1, 2], 1: [2], 2: [0, 3], 3: [3] };
    expect(bfs(2, graph)).not.toEqual([2, 3, 0, 1]);
  });
});

describe("DFS", () => {
  test("simple graph traversal", () => {
    const graph = { 0: [1, 2], 1: [2], 2: [0, 3], 3: [3] };
    expect(dfs(2, graph)).toEqual([2, 0, 1, 3]);
  });

  test("start node not in graph returns empty array", () => {
    expect(dfs(5, { 0: [1], 1: [0] })).toEqual([]);
  });

  test("graph with single node", () => {
    expect(dfs(0, { 0: [] })).toEqual([0]);
  });

  test("graph with disconnected nodes", () => {
    const graph = { 0: [1], 1: [], 2: [] };
    expect(dfs(0, graph)).toEqual([0, 1]);
  });

  test("DFS result should not equal wrong order", () => {
    const graph = { 0: [1, 2], 1: [2], 2: [0, 3], 3: [3] };
    expect(dfs(2, graph)).not.toEqual([2, 3, 0, 1]);
  });
});

describe("Dijkstra", () => {
  test("simple weighted graph", () => {
    const graph = {
      0: [
        [1, 4],
        [2, 1],
      ],
      1: [[3, 1]],
      2: [
        [1, 2],
        [3, 5],
      ],
      3: [],
    };
    expect(dijkstra(graph, 0)).toEqual({ 0: 0, 2: 1, 1: 3, 3: 4 });
  });

  test("start node not in graph returns empty object", () => {
    expect(dijkstra({ 0: [[1, 1]] }, 5)).toEqual({});
  });

  test("graph with single node", () => {
    expect(dijkstra({ 0: [] }, 0)).toEqual({ 0: 0 });
  });

  test("graph with negative edge throws error", () => {
    const graph = { 0: [[1, -2]] };
    expect(() => dijkstra(graph, 0)).toThrow("Negative weights not allowed");
  });

  // Negative Test
  test("Dijkstra result should not equal wrong distances", () => {
    const graph = {
      0: [
        [1, 4],
        [2, 1],
      ],
      1: [[3, 1]],
      2: [
        [1, 2],
        [3, 5],
      ],
      3: [],
    };
    expect(dijkstra(graph, 0)).not.toEqual({ 0: 0, 1: 4, 2: 1, 3: 5 });
  });
});

describe("Kruskal", () => {
  test("simple MST", () => {
    const edges = [
      [0, 1, 1],
      [0, 2, 4],
      [1, 2, 2],
      [2, 3, 3],
    ];
    expect(kruskal(4, edges)).toEqual(6);
  });

  test("edges empty returns 0", () => {
    expect(kruskal(3, [])).toEqual(0);
  });

  test("graph not connected returns -1", () => {
    const edges = [[0, 1, 1]];
    expect(kruskal(3, edges)).toEqual(-1);
  });

  test("MST should not equal wrong weight", () => {
    const edges = [
      [0, 1, 1],
      [0, 2, 4],
      [1, 2, 2],
      [2, 3, 3],
    ];
    expect(kruskal(4, edges)).not.toEqual(7);
  });
});

describe("Prim", () => {
  test("simple MST", () => {
    const edges = [
      [0, 1, 1],
      [0, 2, 4],
      [1, 2, 2],
      [2, 3, 3],
    ];
    expect(prim(4, edges)).toEqual(6);
  });

  test("edges empty returns -1", () => {
    expect(prim(3, [])).toEqual(-1);
  });

  test("graph disconnected returns -1", () => {
    const edges = [[0, 1, 1]];
    expect(prim(3, edges)).toEqual(-1);
  });

  test("Prim MST should not equal wrong weight", () => {
    const edges = [
      [0, 1, 1],
      [0, 2, 4],
      [1, 2, 2],
      [2, 3, 3],
    ];
    expect(prim(4, edges)).not.toEqual(7);
  });
});

describe("Floyd-Warshall", () => {
  test("simple weighted graph", () => {
    const graph = [
      [0, 3, Infinity, 7],
      [8, 0, 2, Infinity],
      [5, Infinity, 0, 1],
      [2, Infinity, Infinity, 0],
    ];
    expect(floydWarshall(graph)).toEqual([
      [0, 3, 5, 6],
      [5, 0, 2, 3],
      [3, 6, 0, 1],
      [2, 5, 7, 0],
    ]);
  });

  test("graph with single node", () => {
    expect(floydWarshall([[0]])).toEqual([[0]]);
  });

  test("graph with Infinity edges", () => {
    const graph = [
      [0, Infinity],
      [Infinity, 0],
    ];
    expect(floydWarshall(graph)).toEqual([
      [0, Infinity],
      [Infinity, 0],
    ]);
  });

  test("graph with negative cycle throws error", () => {
    const graph = [
      [0, -3],
      [1, 0],
    ];
    expect(() => floydWarshall(graph)).toThrow("Negative cycle detected");
  });

  test("Floyd-Warshall should not equal wrong distances", () => {
    const graph = [
      [0, 3, Infinity, 7],
      [8, 0, 2, Infinity],
      [5, Infinity, 0, 1],
      [2, Infinity, Infinity, 0],
    ];
    expect(floydWarshall(graph)).not.toEqual([
      [0, 3, Infinity, 7],
      [8, 0, 2, Infinity],
      [5, Infinity, 0, 1],
      [2, Infinity, Infinity, 1],
    ]);
  });
});
