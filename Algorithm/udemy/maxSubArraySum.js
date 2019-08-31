function maxSubArraySum(A, N) {
  if (A.length < N) return null
  
  let sum = []
  let max = 0
  for (let i = 0; i < A.length - N; i++) {
    sum = A.slice(i, i + N).reduce((v,i)=>v+i)
    if (max < sum) {
      max = sum
    }
  }
  
  console.log(max)
}

maxSubArraySum([1,4,2,10,23,3,1,0,20], 4)

// advanced
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}