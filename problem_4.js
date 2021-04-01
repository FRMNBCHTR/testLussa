function maxProduct(arr){
  let a1 = 0
  let a2 = arr[0]
  arr.forEach((i,a) => {
    a1 = Math.max(i, a1 + i)
    a2 = Math.max(a2, a1)
  })
  return a2
}
console.log(maxProduct([-6,4,-5,8,-10,0,8]))
