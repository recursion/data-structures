var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
}
Queue.prototype.dequeue = function() {
  var result = this.storage[0];
  var initialSize = this.size();
  delete this.storage[0];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  delete this.storage[initialSize - 1];
  return result;
}
Queue.prototype.size = function() {
  var size = 0;
  for (var key in this.storage) {
    size++;
  }
  return size;
}


