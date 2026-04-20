//console.log({}+[]);
//console.log(typeof(NaN));

// function abc() {
//     return {
//         a:1
//     }
// }

// console.log(abc());


// let arr = [10,15,30]
// arr[5] = 100;
// console.log(arr.length);
// console.log(arr);

//find out duplicate element

function findDuplicate(arr) {
    let res =[]
    for (let i = 0; i<arr.length; i++) {

        let isDuplicate = false
    for (let j=i+1; j<arr.length; j++) {
        if(arr[i] === arr[j]) {
            isDuplicate=true
            break
        }
    }

    if(isDuplicate && !res.includes(arr[i])){
        res.push(arr[i])
    }
    
}
return res
}


let arr = [15, 10, 30, 40, 5, 10, 30]



console.log(findDuplicate(arr));
