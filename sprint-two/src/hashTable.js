var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (!bucket) {
    bucket = [];
    this._storage.set(i, bucket);
  }

  var existing = false;
  // iterate through each tuple at the current bucket.
  _.each(bucket, function(tuple) {
    if (tuple[0] === k) {
      tuple[1] = v;
      existing = true;
    }
  });
  // if we did not find an existing matching key in the index to overwrite
  // store the key and value at new indexes.
  if (!existing) {
    bucket.push([k, v]);
    this._count++;

    // If storage has reached 75% of max, double it
    if (this._size > this._limit * .75) {
      var newLimit = this._limit * 2;
      this._resize(newLimit);
    }

  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var result = null;

  if (!bucket) {
    return null;
  }

  _.each(bucket, function(tuple) {
    if (tuple[0] === k) {
      result = tuple[1];
    }
  });

  return result;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);
  var result;

  // if there is only 1 item in this bucket
  // decrement our total storage size
  if (!bucket) {
    return null;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      return null;
    }
  };

  this._count--;
  // If storage has reached 25% of max, halve it
  if (this._count <= this._limit * .25) {
    var newLimit = this._limit / 2;
    this._resize(newLimit);
  }
  return null;
};

HashTable.prototype._resize = function(newLimit) {
  var size = this._storage.size;
  var newStorage = LimitedArray(newLimit);
  var oldStorage = this._storage;
  var that = this;
  this._limit = newLimit;
  this._storage = newStorage;

  oldStorage.each(function(bucket, index, collection) {
    // for each item in this bucket, insert it into our new array
    _.each(bucket, function(value, i, thisCollection) {
      if (i % 2 === 0) {
        that.insert(value, thisCollection[i+1]);
      }
    });
  });
  this._storage.size = size;
};

/*
 * Complexity: What is the time complexity of the above functions?

    So i feel like... my implementation here is not correct...
    Its hard to imagine that the _.each() calls here are keeping this thing in constant time...
    insert:  O(n) ??
    retrieve: O(n) ??
    remove: 0(n) ??
    _resize: 0(n2) polynomial
 */
