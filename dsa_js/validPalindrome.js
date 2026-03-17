function isValid(s) {
    let stack =[]

    let map = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    for (let i=0; i<s.length; i++) {
        let char = s[i]

        if(map[char]) {
            let top=stack.pop()

            if(top !== map[char]) {
                return false
            }
            
        } else {
            stack.push(char)
        }
    }
    return stack.length === 0
}

console.log(isValid("()"))        // true
console.log(isValid("(]"))        // false
console.log(isValid("({[]})"))    // true