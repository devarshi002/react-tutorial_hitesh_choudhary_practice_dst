let s = 'aabcc'
const map = new Map()

for(let char of s){
    if(map.has(char)){
        map.set(char, map.get(char)+1)
    }else{
        map.set(char, 1)
    }
}

console.log(map);
