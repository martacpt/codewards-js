function smallEnough(a, limit){
  let result = true
  for (let i=0; i <= a.length; i++) {
    if (a[i] > limit) {
      result = false
    }
  }
  return result
}
