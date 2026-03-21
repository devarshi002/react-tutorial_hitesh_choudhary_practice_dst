function largestNum(nums) {
    let max = -Infinity

    for (i=0; i<nums.length; i++) {
        if(nums[i] > max) {
            max = nums[i]
        }
        // else {
        //     if (nums[i] > max && nums[i] !== max){

        //     }
        // }
    }
    return max
}

console.log(largestNum([1,2,3,4]));
