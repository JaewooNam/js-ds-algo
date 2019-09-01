var twoSum = function(nums, target) {
  const arr = []
  for (let i=0; i < nums.length; i++) {
    for (let j=i+1; j < nums.length; j++) {
      if (nums[i] + nums[j]=== target) {
        arr.push(i)
        arr.push(j)
      }
    }
  }

  return arr
};

console.log(twoSum([3,2,3],6))

// advanced 

function twoSum_On_Best(arr, target) {
  let numObject = {};
  for (var i = 0; i < arr.length; i++) {
      let thisNum = arr[i];
      numObject[thisNum] = i;
  }
  console.log(numObject)
  for (var i = 0; i < arr.length; i++) {
      let diff = target - arr[i];
      if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
          return [i, numObject[diff]];
      }
  }
}
console.log(twoSum_On_Best([2, 7, 11, 15], 9));
