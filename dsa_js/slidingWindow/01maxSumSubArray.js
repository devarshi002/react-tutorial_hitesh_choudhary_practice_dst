// Q1: Max Sum Subarray of Size K

function maxSumSubArray(nums, k) {
    let windowSum = 0
    let maxSum =0

    //first window
    for (let i = 0; i< k; i++) {
        windowSum += nums[i]
    }
    maxSum = windowSum

    //slide Window
    for (let i = k; i<nums.length; i++) {
        windowSum = windowSum - nums[i-k] + nums[i]
        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum
}

console.log(maxSumSubArray([2,1,5,1,3,2], 3));
