const {
  bfs,
  dfs,
  dijkstra,
  kruskal,
  prim,
  floydWarshall,
} = require("../../algorithms/graph/graph");

describe("Graph Integration Tests", () => {
  const graph = {
    0: [
      [1, 2],
      [2, 3],
    ],
    1: [
      [0, 2],
      [2, 1],
    ],
    2: [
      [0, 3],
      [1, 1],
    ],
  };

  test("BFS + DFS consistency", () => {
    const bfsResult = bfs(0, { 0: [1, 2], 1: [0, 2], 2: [0, 1] });
    const dfsResult = dfs(0, { 0: [1, 2], 1: [0, 2], 2: [0, 1] });
    expect(new Set(dfsResult)).toEqual(new Set(bfsResult));
  });

  test("Kruskal MST weight vs Prim", () => {
    const edges = [
      [0, 1, 2],
      [0, 2, 3],
      [1, 2, 1],
    ];
    expect(kruskal(3, edges)).toEqual(prim(3, edges));
  });
});
