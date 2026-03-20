function nextGreater(nums) {
    let stack = []
    let result = new Array(nums.length)

    //go from r => l
    for (let i = nums.length -1; i>=0; i--) {
        //remove all smaller ele
        while (stack.length > 0 && stack[stack.length-1] <=nums[i]){
            stack.pop()
        }

        //check ans
        if (stack.length===0) {
            result[i] = -1
        } else {
            result[i] = stack[stack.length - 1]
        }
        stack.push(nums[i])
    }
    return result
}

console.log(nextGreater([4,3,2,1]));
