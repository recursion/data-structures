document.addEventListener("DOMContentLoaded", function(event) {
  var q = Queue();

  for (var i = 0; i < 10000; i++) {
    q.enqueue(i);
  }
  for (var i = 0; i < 10000; i += 2) {
    q.dequeue(i);
  }
});


