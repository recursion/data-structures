var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this._size = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this._size] = value;
  this._size++;
}
Queue.prototype.dequeue = function() {
  var result = this.storage[0];
  delete this.storage[0];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  delete this.storage[this._size - 1];
  if (this._size) {
    this._size--;
  }
  return result;
}
Queue.prototype.size = function() {
  return this._size;
}


