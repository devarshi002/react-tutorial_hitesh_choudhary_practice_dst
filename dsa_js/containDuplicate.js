function containDuplicate(nums) {
    for (let i=0; i<nums.length; i++) {
        for (let j= i+1; j<nums.length; j++) {
            if(nums[i]==nums[j]) {
                return true
            }
        }
    }
    return false
}

console.log(containDuplicate([1,2,3,1]))


function duplicate(nums) {
    let seen = {}

    for (let i = 0; i<nums.length; i++) {
        if(seen[nums[i]]) {
            return true
        }
        seen[nums[i]] = true

    }
    return false
}