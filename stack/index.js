// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// For defination of peek method go through the queue exercise first
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor(){
        this.data = [] ;
        this.top = -1 ;
    }

    push(record){
        this.data.push(record) ;
        this.top++ ;
    }

    pop(){
        this.top-- ;
        return this.data.pop();
    }

    peek(){
        return this.data[this.top] ;
    }
}

module.exports = Stack;
