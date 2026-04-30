function reverseStringOnlyVOwels(s){
    let arr = s.split('')
    let left = 0;
    let right = s.length - 1;
    let vowels = new Set(['a','e','i','o','u','A','E','I','O','U'])

    while(left < right){
        while(left < right && !vowels.has(arr[left])) left++
        while(left < right && !vowels.has(arr[right])) right--

        [arr[left],arr[right]]=[arr[right],arr[left]]

        left++;
        right--;

    }
    return arr.join('')
}

console.log(reverseStringOnlyVOwels('Hello'));
