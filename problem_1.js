let n = [1,2,3,4,4];
let checkDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

console.log(checkDuplicates(n)) 
