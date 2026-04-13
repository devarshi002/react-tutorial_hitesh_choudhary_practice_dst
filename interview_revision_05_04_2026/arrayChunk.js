const arr =[[1,2,3],[4,5,6],7,[[8,[9]]]]

//[1,2,3,4,5,6,7]

const result = arr.flat(Infinity);
console.log(result);


const a = arr.reduce((a,c)=>{
    return a.concat(c)
},[])

console.log(a);
