function removeDuplicate(nums) {
    if (nums.length===0) {
        return [];
    }
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if(nums[j]!==nums[i]) {
            i++
            nums[i] = nums[j]
        }
        
    }
    return nums.slice(0, i+1)
}

console.log(removeDuplicate([1,1,1,2,2,3]));




function twoSum(nums, target) {
    

    for (let i = 0; i<nums.length; i++) {
        for (let j = i+1; j<nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i,j]
            }
        }
    }
}

console.log(twoSum([2,7,4,5], 9))