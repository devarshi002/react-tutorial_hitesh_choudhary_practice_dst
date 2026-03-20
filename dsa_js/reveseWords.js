// function reverseWords(chars) {
//     return chars.split(" ").reverse().join(" ")

// }



function reverseWords(str) {
    let words = [];
    let word =""

    for(let char of str) {
        if (char===" "){
            if(word){
                words.push(word)
                word=" "
            }

        }
        else {
            word +=char
        }

    }

    if (word) words.push(word)
    return words.reverse().join(" ")
}

console.log(reverseWords("Hello World"));
