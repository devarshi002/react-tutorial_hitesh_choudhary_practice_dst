const str = "Hello"

const result = str.split("").reverse("").join("")

console.log(result);


function reverseString(str) {
    let result = ""

    for(let i=str.length-1; i>=0; i--) {
        result += str[i]
    }
    return result
}

console.log(reverseString("babu"));
