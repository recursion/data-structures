var Graph = function(value){
  this.value = value;
  this.children = [];
  this.edges = [];
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
      console.log(collection);
      collection.splice(index, 1);
    }
  });
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



