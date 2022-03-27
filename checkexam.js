function checkExam(array1, array2) {
 let result =  array1.reduce((acc, curr, index) => curr !== "" && curr == array2[index] ? acc + 4: array2[index] != "" ? acc - 1: acc, 0)// good luck
 return result <0 ? 0: result
 }
