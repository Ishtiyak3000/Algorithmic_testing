function bfs(start, graph) {
  if (!(start in graph)) return [];

  const result = [];
  const queue = [start];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);

    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}

function dfs(start, graph) {
  if (!(start in graph)) return [];

  const result = [];
  const visited = new Set();

  function dfsHelper(node) {
    visited.add(node);
    result.push(node);

    const neighbors = [...(graph[node] || [])].sort((a, b) => a - b);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) dfsHelper(neighbor);
    }
  }

  dfsHelper(start);
  return result;
}

function dijkstra(graph, start) {
  if (!(start in graph)) return {};

  const distances = {};
  const visited = new Set();
  const pq = [[start, 0]];

  distances[start] = 0;

  while (pq.length > 0) {
    pq.sort((a, b) => a[1] - b[1]);
    const [node, dist] = pq.shift();
    if (visited.has(node)) continue;
    visited.add(node);

    for (const [neighbor, weight] of graph[node] || []) {
      if (weight < 0) throw new Error("Negative weights not allowed");
      const newDist = dist + weight;
      if (distances[neighbor] === undefined || newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.push([neighbor, newDist]);
      }
    }
  }

  return distances;
}

// Kruskal
function kruskal(numNodes, edges) {
  if (edges.length === 0) return 0;

  edges.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: numNodes }, (_, i) => i);
  const rank = Array(numNodes).fill(0);

  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
      if (rank[rootX] > rank[rootY]) parent[rootY] = rootX;
      else if (rank[rootX] < rank[rootY]) parent[rootX] = rootY;
      else {
        parent[rootY] = rootX;
        rank[rootX]++;
      }
    }
  }

  let mstWeight = 0;
  let edgesCount = 0;

  for (const [u, v, w] of edges) {
    if (find(u) !== find(v)) {
      union(u, v);
      mstWeight += w;
      edgesCount++;
    }
  }

  return edgesCount === numNodes - 1 ? mstWeight : -1;
}

// Prim
function prim(numNodes, edges) {
  if (edges.length === 0) return -1;

  const graph = {};
  for (const [u, v, w] of edges) {
    if (!(u in graph)) graph[u] = [];
    if (!(v in graph)) graph[v] = [];
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const inMST = Array(numNodes).fill(false);
  const pq = [[0, 0]]; // [node, weight]
  let mstWeight = 0;

  while (pq.length > 0) {
    pq.sort((a, b) => a[1] - b[1]);
    const [node, weight] = pq.shift();
    if (inMST[node]) continue;
    inMST[node] = true;
    mstWeight += weight;

    for (const [neighbor, w] of graph[node] || []) {
      if (!inMST[neighbor]) pq.push([neighbor, w]);
    }
  }

  return inMST.every(Boolean) ? mstWeight : -1;
}

// Floyd-Warshall
function floydWarshall(graph) {
  const n = graph.length;
  const dist = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) =>
      i === j ? 0 : graph[i][j] !== undefined ? graph[i][j] : Infinity
    )
  );

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (dist[i][i] < 0) throw new Error("Negative cycle detected");
  }

  return dist;
}

module.exports = {
  bfs,
  dfs,
  dijkstra,
  kruskal,
  prim,
  floydWarshall,
};
