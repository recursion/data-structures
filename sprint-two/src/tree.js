var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
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
 */
