function XO(str) {
  let countX = 0
  let countY = 0
  str = str.toLowerCase()
  for (i = 0; i<= str.length; i++) {
    if (str[i] == 'x') {
      countX +=1 
    }
    else if (str[i] == 'o'){
      countY +=1
    }
  }
  return countX == countY ? true : false
}
