var Stack = function(){
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    var result = storage[size - 1];
    delete storage[size - 1];
    if (size) {
      size --;
    }
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
