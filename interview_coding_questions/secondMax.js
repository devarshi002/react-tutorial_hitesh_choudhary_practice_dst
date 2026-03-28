function secondMax(nums){
    let max=-Infinity
    let second = -Infinity

    for(i=0; i<nums.length; i++) {
        if(nums[i]>max){
            second=max
            max=nums[i]
        }
        else
            if(nums[i]>second && nums[i] !== max){
                second=nums[i]
            }
    }
    return second
}


console.log(secondMax([1,2,3,4]));
