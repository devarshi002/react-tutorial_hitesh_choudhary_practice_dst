const nums = [1,2,3,4]

const sum = nums.reduce((a,b)=> a+b,0);

console.log(sum);



const arr = [[1,2],[3,4],[5]];

const flat = arr.reduce((a,b)=> a.concat(b),[])
console.log(flat);
