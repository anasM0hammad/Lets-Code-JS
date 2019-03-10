// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//RECURSIVE SOLUTION

let cache = {} ;

function fib(n) {

   if(n < 2)
    return n;
   
   if(cache[n-1] && cache[n-2]){
        return cache[n-1] + cache[n-2] ;
   }
   else if(cache[n-1]){
        cache[n-2] = fib(n-2);
        return cache[n-1] + cache[n-2] ;
   }  
   else if(cache[n-2]){
     cache[n-1] = fib(n-1);
     return cache[n-1] + cache[n-2] ;
   }
   else{
        cache[n-1] = fib(n-1) ;
        cache[n-2] = fib(n-2);

        return cache[n-1] + cache[n-2];
   }

}

module.exports = fib;
