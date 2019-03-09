// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let words = str.split(" ") ;
  let capitalizeStr = '' ;

  for(let word of words){
    let firstLetter = word.charAt(0).toUpperCase();
    word = firstLetter + word.slice(1) ;
    
    if(capitalizeStr !== ''){
        capitalizeStr = capitalizeStr + " ";
    }
    capitalizeStr = capitalizeStr + word ;
  }

  return capitalizeStr;
}

module.exports = capitalize;
