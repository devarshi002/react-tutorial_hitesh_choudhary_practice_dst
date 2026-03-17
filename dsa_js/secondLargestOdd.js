function secondLargestOdd(arr) {
    let first = -Infinity
    let second = -Infinity

    for (let i=0; i<arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            if(arr[i]>first) {
                second =first
                first=arr[i]
            }
            else if (arr[i] > second && arr[i] !== first) {
                second=arr[i]
            }
        }
    }
    return second === -Infinity ? "Not possible" : second
}

console.log(secondLargestOdd([2,7,4,9,10]));
