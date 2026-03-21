function missingNum(nums) {
    n = nums.length+1

    for(let i=1; i<=n; i++) {
        if(!nums.includes(i)) {
            return i
        }
    }
    
}

console.log(missingNum([1,3,4]));
