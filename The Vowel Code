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
