// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
  
  let newArr = string.split();
  
  for (let i = 0; i<string.length; i++){
    switch(string[i]) {
      case 'a':
        newArr[i] = 1
        break;
      case 'e':
        newArr[i] = 2
        break;
      case 'i':
        newArr[i] = 3
        break;
      case 'o':
        newArr[i] = 4
        break;
      case 'u':
        newArr[i] = 5
        break;
      default:
        newArr[i] = string[i]
    
    }
    if( i === string.length-1) {
      let newEncodedString = newArr.join('');
      
      return newEncodedString
    }
  }
}

function decode(string) {
  let newDecodingArr = string.split();
  
  for (let i = 0; i<string.length; i++){
    switch(string[i]) {
        case '1':
          newDecodingArr[i] = 'a'
          break;
        case '2':
          newDecodingArr[i] = 'e'
          break;
        case '3':
          newDecodingArr[i] = 'i'
          break;
        case '4':
          newDecodingArr[i] = 'o'
          break;
        case '5':
          newDecodingArr[i] = 'u'
          break;
        default:
          newDecodingArr[i] = string[i]
        
     
}
    if( i === string.length-1) {
      let newDecodedString = newDecodingArr.join('')
      return newDecodedString
    }
  }
}
