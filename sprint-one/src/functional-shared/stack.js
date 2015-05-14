var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance._size = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value){
    this.storage[this._size] = value;
    this._size++;
  },
  pop: function(){
    var result = this.storage[this._size - 1];
    delete this.storage[this._size - 1];
    if (this._size) {
      this._size--;
    }
    return result;
  },
  size: function(){
    return this._size;
  }
};


