// function reverseStrWithStack(str) {
//     let stack = []
//     let result = " "

//     for (let char of str) {
//         stack.push(char)
//     }

//     while(stack.length > 0) {
//         result += stack.pop()
//     }

//     return result
// }

// console.log(reverseStrWithStack("baburao"));




function reverseString_withStack(str) {
    let stack = []
    let result = " "

    for (let char of str) {
        stack.push(char)
    }

    while(stack.length >0) {
        result+=stack.pop()
    }

    return result
}

console.log(reverseString_withStack("eraajut"));
