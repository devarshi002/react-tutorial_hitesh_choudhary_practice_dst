function removeDuplicate(arr) {
    let k = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[k] = arr[i];
            k++;
        }
    }
    return k;
}

const arr = [1,2,2,3,4,4,5]

const k = removeDuplicate(arr)
console.log(arr.slice(0,k));
