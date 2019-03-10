// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  
  constructor() {
    this.data = [];
    this.count = -1 ;
  }

  add(record) {
    this.data.unshift(record);
    this.count++ ;
  }

  remove() {
    this.count-- ;
    return this.data.pop();
  }

  peek(){
    return this.data[this.count] ;
  }
}

module.exports = Queue;
