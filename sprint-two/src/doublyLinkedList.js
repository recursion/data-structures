var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.prev = null;

  list.addToTail = function(value){
    var n = Node();
    n.value = value;
    if (list.head === null) {
      list.head = n;
      list.tail = n;
    } else {
      n.prev = list.tail;
      list.tail.next = n;
      list.tail = n;
    }
  };

  list.addToHead = function(value) {
    var n = Node();
    n.value = value;
    if (list.head === null) {
      list.head = n;
      list.tail = n;
    } else {
      n.next = list.head;
      list.head = n;
    }

  };

  list.removeTail = function() {
    var result = list.tail;
    list.tail = list.tail.prev;
    return result;
  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target){
    var contains = false;
    var node = list.head;
    while (1){
      if (node.value === target) {
        contains = true;
        break;
      }
      if (node.next === null) {
        break;
      }
      node = node.next;
    }
    return contains;
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
addToTail: O(1) (constant)
removeHead: O(1) (constant)
contains: O(n) (linear)
 */
