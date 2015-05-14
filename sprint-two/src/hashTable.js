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
  console.log(this._storage.get(i)[0].split(this.hashDiv));
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
