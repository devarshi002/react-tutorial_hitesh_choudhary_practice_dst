function convertTOTitle(colNum){
    let result = ""

    while(colNum > 0){
        colNum--

        let remainder = colNum % 26;
        result = String.fromCharCode(65 + remainder) + result

        colNum = Math.floor(colNum / 26)
    }

    return result
}


console.log(convertTOTitle(28));
