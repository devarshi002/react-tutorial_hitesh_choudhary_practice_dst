
//'hello world from react'

function reverseStr(str){
    let result = ''
    for (let i = str.length-1; i>=0; i--){
        result += str[i]
    }
    return result
}

console.log(reverseStr('hello world from react'));



function reverseWordOrder(str) {
    let result = ""
    let word = ""

    for (let i = 0; i<str.length; i++) {
        if(str[i] !== " ") {
            word += str[i]
        } else {
            result = word + " " + result
            word = " "
        }
    }

    result = word + " " + result
    return result.trim()
}

console.log(reverseWordOrder("react from world hello"));
