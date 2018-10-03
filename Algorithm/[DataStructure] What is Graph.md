# What is Graph

In computer science, a **graph** is an abstract data type that is menat to implementthe undirected graph and directed graph concepts from mathematics; specifically, the field of graph theory.

A **graph data structure** consists of a finite set of **nodes**, together with a set of unordered pairs or these verices for an undirected graph or a set of ordered pairs for a directed graph. These pairs are known as **edges** for an undirected graph and as arrows for a directed graph.



```javascript
var Graph = function() {
    this.storage = []
}

// Add a node to the graph, passing in the node's value
Graph.prototype.addNode = function (node) {
    this.storage.push({ value: node, edge: [] })
}

// Removes a node from the graph
Graph.prototype.removeNode = function (node) {
    var nodeIndex = this.storage.findIndex((elem) => elem.value === node)
    this.storage.splice(nodeIndex, 1)
}

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.storage.forEach((elem) => {
    if (elem.value === fromNode) elem.edge.push(toNode)
    if (elem.value === toNode) elem.edge.push(fromNode)
  })
}

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  var edgeIndex
  this.storage.forEach((elem) => {
    if (elem.value === fromNode) {
      edgeIndex = elem.edge.indexOf(toNode)
      elem.edge.splice(edgeIndex, 1)
    }
    if (elem.value === toNode) {
      edgeIndex = elem.edge.indexOf(fromNode)
      elem.edge.splice(edgeIndex, 1)
    }
  })
}
```

