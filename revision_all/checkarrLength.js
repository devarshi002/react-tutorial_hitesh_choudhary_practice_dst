let arr  = [,,,] //3
let arr2 = [1,2,3,4] //3
let arr3 = [[1,2,3], [4,5,6]] //1

console.log(arr.length);
console.log(arr2.length);
console.log(arr3.length);

// sort in ascending order



let arr = [1,80,9,81,98,124,78]

console.log(arr.sort((a,b)=> a-b));
 


function sortAsc(arr2){
    for(let i = 0; i<arr2.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr2[j] > arr2[j+1]){
                let temp = arr2[j]
                arr2[j] = arr2[j+1]
                arr2[j+1] = temp
            }
        }
    }
    return arr2
}

console.log(sortAsc([1,80,9,81,98,124,78]));
