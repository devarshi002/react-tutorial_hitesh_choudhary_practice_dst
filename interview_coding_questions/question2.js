// var x = 20;

// function foo() {
//     console.log(x);
//     var x =10;
    
// }

// foo()


// foo()

// var foo = 20

// function foo() {
//     console.log("calling foo");
    
// }
// foo()

// // foo is not a function



//example of clouser
// function outer() {
//     let count = 0;

//     return function inner() {
//         count++
//         console.log(count);
//     }
// }

// const fn = outer()
// fn()
// fn()


// function counter() {
//     let count = 0;

//     return ()=>{
//         count++
//         return count        
//     }
// }

// let value = counter();
// console.log(value());
// console.log(value());
// console.log(value());
// console.log(value());
// console.log(value());


//event loop
// console.log("start");

// setTimeout(()=>{
//     console.log("Timeout");
    
// },0)

// console.log("End");

// for (var i=1; i<=3; i++) {
//     setTimeout(()=>{
//         console.log(i);
        
//     },1000)
// }

// //fixed 
// for (var i= 1; i<=3; i++) {
//     (function(i){
//         setTimeout(()=>{
//             console.log(i);
            
//         },1000)
//     })(i);
// }


// setTimeout(()=>{
//     console.log("Timeout");
    
// },0)

// Promise.resolve().then(()=> console.log('Promises')
// )

// console.log("End");


// async function foo() {
//     return "Hello world"
// }

// async function main(params) {
//     const result = await foo()
//     console.log(result);
//     console.log("hi");
//     console.log(88);
//     console.log("9");
    
// }

// main()


// function abc() {
//     console.log("hii");
    
// }

// const value=new abc()

// console.log(value);



const arr = {
    name : "deva",
    age: 22
}

const {name, age} = arr

console.log(name);


const result = {
    "user-name" : arr.name
};

console.log(result);


