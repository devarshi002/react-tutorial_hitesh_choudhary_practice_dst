//["react", "javascript", "next","Frontend"] find longest str

function longestStr(str) {
    let longest = ""

    for (let char of str) {
        if(char.length > longest.length){
            longest=char;
        }
    }
    return longest
}

console.log(longestStr(["react", "javascript", "next","Frontend"]));


//reduce method

function longStr(str) {
    return str.reduce((long, current)=>{
        return current.length > long.length ? current : long
    },"")
}

console.log(longStr(["react", "javascript", "next","Frontend"]));
