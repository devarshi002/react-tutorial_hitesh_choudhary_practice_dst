// console.log([]==![]);//true


// typeof(null) ;//object
// typeof(undefined) ;//undefined
// console.log(null==undefined);//true
// console.log(null===undefined);//false


// function abc(){
//     return    {name: "deva"};
// }

// console.log(abc());



// const arr = [10,12,18,6,4];

// function twoSum(arr, target) {
//     for (let i=0; i<arr.length; i++) {
//         for (let j=i+1; j<arr.length; j++){
//             if (arr[i] + arr[j] === target) {
//                 return [i,j];
//             }
//         }
//     }
// }

// console.log(twoSum(arr,30));



// function add(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         }
//     }
// }
// console.log(add(1)(3)(3));



function greet(name) {
    console.log("hello" + name);
    
}

function user(callback) {
    let name = "deva";
    callback(name);
}

user(greet);