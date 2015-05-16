var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance._size = 0;
  someInstance._next = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    if (this._size === 0) {
      this._next = 0;
    }

    if (this._size <= this._next && this._size !== 0) {
      this.storage[this._next + 1] = value;
    } else {
      this.storage[this._size] = value;
    }

    this._size++;
  },
  dequeue: function(){
    var result = this.storage[this._next];
    delete this.storage[this._next];
    this._next++;

    if (this._size) {
      this._size--;
    }

    return result;
  },
  size: function(){
    return this._size;
  }
};



