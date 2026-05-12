function containDuplicate(num){
    const map = new Map()

    for(let val of num){
        if(map.has(val)){
            map.set(val, map.get(val)+1)
        }
        else{
            map.set(val, 1)
        }
    }

    for(let i=0; i<num.length; i++){
        if(map.get(num[i])>=2){
            return true
        }
        
    }
    return false
}

console.log(containDuplicate([1,2,3,4]));
