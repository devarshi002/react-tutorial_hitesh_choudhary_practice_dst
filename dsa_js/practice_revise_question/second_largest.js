function secondLargest(arr) {
    let max = -Infinity
    let second = -Infinity

    for (let i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            second = max
            max = arr[i]
        }
        else if(arr[i] > second && arr[i] !== max) {
            max = arr[i]
        }
    }

    return second
}

console.log(secondLargest([1,2,4,5]));
