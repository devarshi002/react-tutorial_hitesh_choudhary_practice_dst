function sqrt(n){
    if(n<2){
        return n
    }

    let left = 0;
    let right = n;

    while(left <= right){
        let mid = Math.floor((left + right) / 2)

        if(mid * mid == n){
            return mid
        }
        else if(mid * mid < n){
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return right
}

console.log(sqrt(4));
