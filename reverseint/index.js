// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reverse = 0 ;
    let neg = false ;

    if(n < 0){
        n = n*(-1) ;
        neg = true ;
    }

    while(n > 0){
        let digit = n%10 ;
        reverse = 10*reverse + digit ;
        n=n/10 ;
        n = parseInt(n);
    }

    if(neg){
        reverse = reverse*(-1)
    }

    return reverse ;
}

module.exports = reverseInt;
