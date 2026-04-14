//ak unsorted array diya hai usme segment find karni hai increment order me and max sum return karna hai

function maxIncreasingSum(arr) {
    let maxSum = arr[0]
    let currSum = arr[0]

    for (let i = 1; i<arr.length; i++){
        if(arr[i] > arr[i-1]) {
            currSum +=arr[i]
        }
        else {
            currSum=arr[i]
        }
        maxSum=Math.max(maxSum, currSum)
    }
    return maxSum
}

let input = "203 200 2 3 200 4 5"

let arr = input.split(" ").map(Number)
console.log(maxIncreasingSum(arr));
