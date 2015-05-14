var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance._size = 0;

  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this._size] = value;
    this._size++;
  },
  dequeue: function(){
    var result = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    delete this.storage[this.size - 1];
    if (this._size) {
      this._size--;
    }
    return result;
  },
  size: function(){
    return this._size;
  }
};



