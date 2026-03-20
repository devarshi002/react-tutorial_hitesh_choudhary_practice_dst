function isValid(str) {
    let stack = []
    let map = {
        ')':'(',
        ']':'[',
        '}':'{'
    };


    for (let char of str) {
        if(char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }
        else {
            if(stack.pop() !=map[char]) {
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(isValid("()[]{}"))