console.log("A"); //1

setTimeout(()=>{
    console.log("Timeout A"); //4
    
})

Promise.resolve().then(()=>{
    console.log("Promises C"); //3
    
})

console.log("D"); //2

