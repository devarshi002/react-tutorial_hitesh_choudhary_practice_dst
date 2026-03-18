import { info, log } from "node:console";

console.log(1<2<3);
console.log(3>2>1);

console.log(1<2);

console.log(true<3);

console.log(3>2);

console.log(true > 1);


// Promise.resolve()
// .then(()=> console.log("A")
// );
// console.log("B");


const obj = {a:1}
const copy = obj;
copy.a =2;
console.log(obj.a);


const str = "ABC"

let result = ""

for (let i = 0; i< str.length; i++) {
    result = str[i] + result;
}

console.info(result)