# What is Tree

In computer science, a **tree** is a widely used abstract data type that stimulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.

A **tree data structure** can be defined recursively as a **collection of nodes**(starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes(the "children"), with the constraints that no reference is duplicated, and none points to the root.



```javascript
var Tree = function (value) {
    var newTree = {}
    newTree.value = value
    
    // an array containing a number of subtrees
    newTree.children = []
    Object.assign(newTree, treeMethods)
    
    return newTree
}

var treeMethods = {}

// A method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
treeMethods.addChild = function (value) {
    var child = Tree(value)
    this.children.push(child)
}
```



## Binary Search Tree

In computer science, **a binary tree** is a tree data structure in which each node has at most two children.



```javascript
var BinarySearchTree = function (value) {
  var binaryTree = Object.create(binaryTreePrototype)
  binaryTree.value = value
  // a binary search tree(BST) where all values are lower than it the current value
  binaryTree.left = null
  // a BST where all values are higher than it the current value.
  binaryTree.right = null
  return binaryTree
}

var binaryTreePrototype = {}

// A method, which accepts a value and places in the tree in the correct poisition.
binaryTreePrototype.insert = function (val) {
  if (val < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val)
    } else {
      this.left.insert(val)
    }
  } else if (val > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(val)
    } else {
      this.right.insert(val)
    }
  } else {
    // do nothing: The tree already contains this value
  }
}
```

