function removeDuplicate(nums) {
    return [...new Set(nums)]
}

console.log(removeDuplicate([1,2,2,3]));


function removeduplicate(nums) {
    let k = 1

    for (let i=1; i<nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            nums[k] = nums[i]
            k++
        }
        
    }
    return k
}

console.log(removeduplicate([2,2,5,7,7]));
