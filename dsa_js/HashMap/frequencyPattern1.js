function checkFrequency(nums){
    const map = new Map()
    

    for(let char of nums){
        if(map.has(char)){
            map.set(char, map.get(char)+1)
        }else{
            map.set(char,1)
        }
    }
    return map
}

console.log(checkFrequency("leetcode"));

