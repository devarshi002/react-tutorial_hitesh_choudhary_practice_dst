//find largest number in array

function findMax(arr) {
    let Max = arr[0]

    for (let i=0; i<arr.length; i++) {
        if(arr[i]>Max) {
            Max=arr[i]
        }
    }
    return Max
}

console.log(findMax([3,5,7,1,6]))