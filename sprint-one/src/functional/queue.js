var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    console.log(someInstance.size(), storage);
    storage[someInstance.size()] = value;
    console.log('added ' + value, storage);
  };

  someInstance.dequeue = function(){
    var result = storage[0];
    var initialSize = someInstance.size();

    console.log('removing ' + storage[0], storage);
    delete storage[0];
    for (var key in storage) {
      console.log('iterating through ' + key);
      storage[key - 1] = storage[key];
    }
    delete storage[initialSize];
    console.log('removed item', storage);
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
