var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.hashDiv = ']!:![';
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var hash = k+this.hashDiv+v;
  this._storage.set(i, [hash]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)) {
    return this._storage.get(i)[0].split(this.hashDiv)[1];
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
  console.log('Deleted ' + this._storage.get(i));
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
