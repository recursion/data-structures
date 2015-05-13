var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function(){
    var result = storage[someInstance.size()];
    delete storage[someInstance.size()];
    return result;
  };

  someInstance.size = function(){
    var size = 0;
    for (var key in storage){
      size++
    }
    return size;
  };

  return someInstance;
};
