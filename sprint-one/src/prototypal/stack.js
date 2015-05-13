var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someStack = Object.create(stackMethods);
  someStack.storage = {};
  return someStack;
};

var stackMethods = {
  push: function(value){
    this.storage[this.size()] = value;
  },
  pop: function(){
    var result = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return result;
  },
  size: function(){
    var size = 0;
    for (var key in this.storage) {
      size++;
    }
    return size;
  }
};


