// import { log } from "node:console";

// function clouser() {
//     let count = 0;

//     return function inner() {
//         count=count+1;
//         console.log(count);
        
//     }
// }

// const fn = clouser();
// fn()
// fn()





function outer() {
    let count =0;

    return function inner() {
        count = count+1;
        console.log(count);
        
    }
}

const fn = outer();
fn()
fn()