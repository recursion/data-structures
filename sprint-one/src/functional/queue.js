var Queue = function(){
  var someInstance = {};
  var size = 0;
  var next = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){

    if (size === 0) {
      next = 0;
    }

    if (size <= next && size !== 0) {
      storage[next + 1] = value;
    } else {
      storage[size] = value;
    }

    size++;
  };

  someInstance.dequeue = function(){
    var result = storage[next];

    delete storage[next];
    next++;

    if (size) {
      size--;
    }
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
