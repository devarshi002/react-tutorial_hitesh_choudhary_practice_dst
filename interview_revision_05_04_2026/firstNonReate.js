function firstNonRepeating(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let j;
        for (j = 0; j < n; j++) {
            if (i !== j && arr[i] === arr[j])
                break;
        }

        if (j === n)
            return arr[i];
    }

    return -1;
}

console.log(firstNonRepeating([-1, 2, -1, 3, 2]));
