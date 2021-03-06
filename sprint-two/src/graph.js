var Graph = function(value){
  this.children = [];
  this.edges = {};
};

Graph.prototype.addNode = function(node){
  this.children.push(node);
};

Graph.prototype.contains = function(node){
  var contains = false;
  _.each(this.children, function(currentNode) {
    if (currentNode === node) {
      contains = true;
    }
  });
  return contains;
};

Graph.prototype.removeNode = function(node){
  _.each(this.children, function(currentNode, index, collection) {
    if (currentNode === node) {
      collection.splice(index, 1);
    }
  });
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if (fromNode in this.edges) {
    if (this.edges[fromNode].indexOf(toNode) >= 0) {
      return true;
    } else {
      return false;
    }
  } else {
    throw "Error: Key "+fromNode+" does not exist in this edges object.";
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (!(fromNode in this.edges)) {
    this.edges[fromNode] = [];
  }
  this.edges[fromNode].push(toNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  this.edges[fromNode].splice(this.edges[fromNode].indexOf(toNode), 1);
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.children, function(child) {
    cb(child);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: O(1) constant
 contains: O(n) linear
 removeNode: O(n) linear
 hasEdge: O(1) constant
 addEdge: O(1) constant
 removeEdge: 0(n) linear ->funky because of indexOf()
 forEachNode: O(n) linear
 */



