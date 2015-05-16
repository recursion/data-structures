var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this._size= 0;
};
Stack.prototype.push = function(value){
  this.storage[this.size()] = value;
  this._size++;
};
Stack.prototype.pop = function(){
  var result = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  if (this._size) {
    this._size--;
  }
  return result;
};
Stack.prototype.size = function(){
  return this._size;
};
