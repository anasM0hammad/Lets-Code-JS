// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
   let charecters = {} ;

   for(char of str){
       if(!charecters[char]){
           charecters[char] = 1 ;
       }
       else{
           charecters[char]++  ;
       }
   }

   let max = 0 ;
   let maxChar = '' ;

    for(let char in charecters){
        if(charecters[char] > max){
            max=charecters[char] ;
            maxChar = char ;
        }
    }

    return maxChar ;
}

module.exports = maxChar;
