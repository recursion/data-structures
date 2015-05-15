var BinarySearchTree = function(value){
  var thisTree = Object.create(BinarySearchTree.prototype);
  thisTree.value = value;
  thisTree.left;
  thisTree.right;
  return thisTree;
};

BinarySearchTree.prototype.insert = function(value){
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};
BinarySearchTree.prototype.contains = function(target){
  if (this.value === target) {
    return true;
  } else if (target < this.value && this.left !== undefined) {
    return this.left.contains(target);
  } else if (target > this.value && this.right !== undefined) {
    return this.right.contains(target);
  } else {
    return false;
  }
};
BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
     insert: O(log(n)) logarithmic
     contains: O(log(n)) logarithmic
     depthFirstLog: O(n) linear
 */
