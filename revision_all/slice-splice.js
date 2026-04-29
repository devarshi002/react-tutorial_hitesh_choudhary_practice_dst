//=================sclice============================//

let arr = [10, 20, 30, 40, 50];

let result = arr.slice(1,4)
console.log(result);
console.log(arr);

//slice copy array and return new arrar with modification 


//========================splice========================//
//delete
let ans = arr.splice(1,2)
console.log(ans);
console.log(arr);


//add
let add = arr.splice(1, 0, 20, 30, 60);
console.log(add);
console.log(arr);



