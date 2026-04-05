//it is slightly modified version of binary search

// arr = [1,2,2,2,3,4]
// target = 2

// output :-
// first index = 1
// last index = 3


function firstOccurence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;

    while(left<= right) {
        let mid = Math.floor((left+right)/2);

        if(arr[mid] === target) {
            ans=mid;
            right=mid-1;
        }
        else if (arr[mid] < target){
            left = mid + 1
        }
        else {
            right = mid - 1;
        }
    }
    return ans;
}


function lastOccurance(arr, target){
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;

    while(left <= right) {
        let mid = Math.floor((left + right )/ 2)

        if(arr[mid] === target) {
            ans = mid;
            left = mid + 1;
        } else if (arr[mid] < target){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return ans
}


let arr = [1,2,2,2,3,4];

console.log(firstOccurence(arr,2))
console.log(lastOccurance(arr,2));
