var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var n = Node();
    n.value = value;
    if (list.head === null) {
      list.head = n;
      list.tail = n;
    } else {
      list.tail.next = n;
      list.tail = n;
    }
  };

  list.removeHead = function(){
    list.head = list.head.next;
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
