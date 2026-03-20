function countFrequency(str) {
    let result = {};

    for(let item of str) {
        if(result[item]) {
            result[item]++
        }
        else {
            result[item] = 1
        }
    }

    return result
}

console.log(countFrequency("aabbccd"));





function countfrequency(str) {
    let result= {}

    for(let item of str) {
        if(result[item]) {
            result[item]++
        }
        else {
            result[item] = 1
        }
    }

    return result
}