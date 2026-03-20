function findMissingNum(nums) {
 let n = nums.length +1

 for (let i=1; i<=n; i++) {
    if(!nums.includes(i)) {
        return i
    }
    }

}
console.log(findMissingNum([1,2,3,5])); // 4