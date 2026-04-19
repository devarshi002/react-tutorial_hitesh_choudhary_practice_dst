var longestPalindrome = function(s) {
    let res=""


    function expand(l,r) {
        while(l >=0 && r<s.length && s[l] === s[r]) {
            l--
            r++
        }
        return s.substring(l+1,r)
    }

    for(let i=0; i<s.length; i++) {
        let odd = expand(i,i)
        let even = expand(i,i+1)

        let long =  odd.length > even.length ? odd : even

        if(long.length > res.length) {
            res = long
        }
    }
    return res
}

console.log(longestPalindrome("babad")); // bab ya aba
console.log(longestPalindrome("cbbd"));  // bb