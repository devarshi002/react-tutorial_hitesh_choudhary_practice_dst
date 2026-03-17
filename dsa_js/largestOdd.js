function largestOddNumber(arr) {
    let max = -Infinity

    for (let i=0; i<arr.length; i++) {
        if(arr[i] %2 !== 0) {
            if (arr[i] > max) {
                max = arr[i]
            }
        }
    }
    return max === -Infinity ? "No odd number" : max
}

console.log(largestOddNumber([10,5,8,3]));
