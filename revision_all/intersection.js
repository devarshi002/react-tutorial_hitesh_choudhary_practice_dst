
function intersection(arr1, arr2){
    let result =[]

    for(let i = 0; i<arr1.length; i++){
        for(let j=0; j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                result.push(arr1[i])
            }
        }
    }
    return result
}

console.log(intersection([100,200,300,400],[300,400,500,600]));
