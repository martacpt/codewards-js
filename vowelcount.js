function getCount(str) {
  var vowelsCount = 0;
  
  let arr = str.split('')
  
  for (i=0; i <arr.length; i++) {
    if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' ||arr[i] === 'u') {
      vowelsCount ++
    }
  
    }  return vowelsCount;

}
