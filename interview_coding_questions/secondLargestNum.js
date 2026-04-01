function secLarNum(nums) {
    let max = -Infinity
    let sec = -Infinity

    for (let i = 0; i<=nums.length; i++) {
        if(nums[i]> max){
            sec=max
            max=nums[i]
        }
        else if(nums[i] > sec && nums[i] !== max) {
                sec=nums[i]
            }
        
    }

    return sec
}

console.log(secLarNum([1,2,3,4]));
