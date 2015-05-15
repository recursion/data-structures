var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[JSON.stringify(item)] = item;
};

setPrototype.contains = function(item){
  if (JSON.stringify(item) in this._storage) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item){
  delete this._storage[JSON.stringify(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 all functions are O(1) constant time
 except maybe contains, because Im not sure how 'in' works?
 */
