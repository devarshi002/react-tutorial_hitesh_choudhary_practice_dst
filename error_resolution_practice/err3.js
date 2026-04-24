let a;
console.log(a.toUpperCase()); //undefined 

const user = null;
console.log(user.name); //name cannot read property of null

function test() {
    let x = 10;
}

console.log(x); //reference error because of block scope


let obj = {name : "dev"}
obj() //obj is not function

console.log(obj.name);


for (let i = 0; i<3; i++) {
    setTimeout(()=>{
        console.log(i);
        
    }, 1000)
}


let arr = [1,2,3]

console.log(arr[5].toString()); //arr[5] value is not defined so it give cannot read properties of undefined


console.log(b);
let b = 5; //reference error cannot access b before initialization

