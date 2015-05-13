var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function(){
    var result = storage[0];
    var initialSize = someInstance.size();

    delete storage[0];
    for (var key in storage) {
      storage[key - 1] = storage[key];
    }
    delete storage[initialSize - 1];
    return result;
  };

  someInstance.size = function(){
    var size = 0;
    for (var key in storage) {
      size++;
    }
    return size;
  };

  return someInstance;
};
