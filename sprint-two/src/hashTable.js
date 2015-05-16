var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._storage.size = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
    // should this be creating a limited array instead of a regular array?
    this._storage.set(i, [k, v]);
    this._storage.size++;

    // If storage has reached 75% of max, double it
    if (this._storage.size + 1 >= this._limit * .75) {
      var newLimit = this._limit * 2;
      this.reload(newLimit);
    }
  } else {
    var bucket = this._storage.get(i);
    var existing = false;
    // iterate through each value at the current bucket.
    _.each(bucket, function(val, index) {
      // check only even indexes for our key
      if (index % 2 === 0) {
        if (val === k) {
          bucket[index + 1] = v;
          existing = true;
        }
      }
    });
    // if we did not find an existing matching key in the index to overwrite
    // store the key and value at new indexes.
    if (!existing) {
      bucket[bucket.length] = k;
      bucket[bucket.length] = v;
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)) {
    var bucket = this._storage.get(i);
    var result;
    _.each(bucket, function(val, index) {
      if (index % 2 === 0) {
        if (val === k) {
          result = bucket[index + 1];
        }
      }
    });
    return result;
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  // if there is only 1 item in this bucket
  // decrement our total storage size
  if (bucket) {
    if (bucket.size >= 1) {
      this._storage.size--;
    }
    _.each(bucket, function(val, index) {
      if (index % 2 === 0) {
        if (val === k) {
          bucket[index + 1] = null;
        }
      }
    });
    // If storage has reached 25% of max, halve it
    if (this._storage.size <= this._limit * .4) {
      var newLimit = this._limit / 2;
      this.reload(newLimit);
    }
  }
};

HashTable.prototype.reload = function(newLimit) {
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
 */
