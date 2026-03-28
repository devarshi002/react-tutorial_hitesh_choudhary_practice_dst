function removeDuplicate(nums){
    return [...new Set(nums)]
}

console.log(removeDuplicate([1,2,2,3,4,4,5,5]));
