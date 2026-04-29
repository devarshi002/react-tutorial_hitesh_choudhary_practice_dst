function removeDuplicate(arr){
    arr.sort((a,b)=>a-b)
    let pos = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[pos] !== arr[i]){
            
            pos++
            arr[pos] = arr[i]
        }
    }
    return arr.slice(0,pos+1)

}


console.log(removeDuplicate([1,80,9,81,98,124,78,78,81]));



function removes(arr){
    return [...new Set(arr)]
}

console.log(removes([1,80,9,81,98,124,78,78,81]));
