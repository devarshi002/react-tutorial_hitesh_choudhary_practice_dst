function multiplyAll(arr) {
    let result = 1

    for (let i=0; i<arr.length; i++) {
        result = result * arr[i]
    }
    return result
}

console.log(multiplyAll([1,2,3,4]));
