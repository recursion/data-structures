var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = Tree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.traverse = function(callback) {
  callback(this);
  _.each(this.children, function(val) {
    val.traverse(callback);
  });
};

treeMethods.removeFromParent = function() {
  var index = this.parent.children.indexOf(this.value);
  this.parent.children.splice(index, 1);
  this.parent = null;
};

treeMethods.contains = function(target){
  var contains = false;
  var recursiveContains = function(target, source) {
    _.each(source, function(val) {
      if (val.value === target) {
        contains = true;
      }
      recursiveContains(target, val.children);
    });
  };
  recursiveContains(target, this.children);
  return contains;
};


/*
 * Complexity: What is the time complexity of the above functions?
   addChild: O(1) constant
   contains: O(n) linear
   removeFromParent: O(1)
   traverse: O(n) linear
 */
