// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//ITERATIVE SOLUTION

function fib(n) {
    let first = 0 ;
    let second = 1 ;
    let third ;

    if(n === 0)
      return first ;
    
     if(n === 1)
      return second ;

     
    for(let i = 2 ; i <= n ; i++){
        third = first + second ;

        first = second ;
        second = third ;
    }
    
    return third ;
}

module.exports = fib;
