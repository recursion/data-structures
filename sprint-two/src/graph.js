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
  if (this.edges[fromNode].indexOf(toNode) >= 0) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (!(fromNode in this.edges)) {
    this.edges[fromNode] = [];
  }
  this.edges[fromNode].push(toNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



