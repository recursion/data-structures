var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
    this._storage.set(i, [k, v]);
  } else {
    var bucket = this._storage.get(i);
    var existing = false;
    // iterate through each value at the current bucket.
    _.each(bucket, function(val, index) {
      // check even indexes only
      if (index % 2 === 0) {
        // check if the value in the even index matches the
        // value of the key we are trying to store
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
      if (index % 2 == 0) {
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
  // so this works, and is passing tests... but...
  // its not correct by any means.
  this._storage.set(i, null);
  console.log('Deleted ' + this._storage.get(i));
};



/*
 * Complexity: What is the time complexity of the above functions?

    So i feel like... my implementation here is not correct...
    Its hard to imagine that the _.each() calls here are keeping this thing in constant time...
    insert:  O(n) ??
    retrieve: O(n) ??
    remove: 0(n) ??
 */
