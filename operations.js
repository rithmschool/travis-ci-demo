function add(a=0,b=0){
  return a+b;
}

function subtract(a = 0, b = 0) {
  return a - b;
}

function average(...nums){
  if(nums.length === 0) return 0;
  const total = nums.reduce(function(acc,next){ 
    return acc + next
  }) 
  return total / nums.length
}

module.exports = { add, average, subtract}