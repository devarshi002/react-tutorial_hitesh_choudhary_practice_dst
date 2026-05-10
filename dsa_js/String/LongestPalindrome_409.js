function longestPalindrome(str){
    const map = new Map()
    let ans = 0;
    let hasOdd = false

    for(let char of str){
        if(map.has(char)){
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }

    for(let val of map.values()){
        if(val % 2 == 0){
            ans += val
        }
        else {
            
            ans += val - 1
            hasOdd = true
        }
    }

    if(hasOdd){
        ans +=1
    }

    return ans
}


console.log(longestPalindrome("abccccdd"));
