// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    let vowelcount = 0 ;

    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
        vowelcount++ ;

        if(str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U')
        vowelcount++ ;
        
        if(str[i] === 'A'){
            vowelcount++ ;
            vowelcount-- ;
        }
    }

    return vowelcount ;
}

module.exports = vowels;
