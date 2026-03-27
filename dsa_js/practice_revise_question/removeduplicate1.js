function removeDuplicate01(nums) {
    k=1;

    for (let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1])  {
            nums[k] = nums[i]
            k++
        }
        
    }
    return nums.slice(0,k)
}

console.log(removeDuplicate01([1,1,2,2,3]));
