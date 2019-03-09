// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let rowLength = 2*n - 1 ;
    let curRow = 1 ;

    while(curRow <= n){
        let noOfHash = 2*curRow - 1 ;
        let space = (rowLength - noOfHash)/2 ;
        let row = '' ;

        for(let i = 1 ; i <= space ; i++)
          row = row + ' ' ;

        for(let i = 1 ; i <= noOfHash ; i++)
          row = row + '#' ;
          
        for(let i = 1 ; i <= space ; i++)
         row = row + ' ' ;
         
         console.log(row);

         curRow++ ;
    }
}

module.exports = pyramid;
