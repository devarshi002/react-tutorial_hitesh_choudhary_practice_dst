let arr = [1,2,3,"c",4,"d",5]

let numbers = []
let strings = []

for(let i = 0; i<arr.length; i++) {
    if(typeof arr[i] === "number"){
        numbers.push(arr[i])
    }
    else if(typeof arr[i]=== "string" ){
        strings.push(arr[i])
    }
}

console.log(numbers);
console.log(strings);
