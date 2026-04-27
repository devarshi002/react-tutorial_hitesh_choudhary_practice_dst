let timer = 0;

var a = setInterval(()=>{
    timer++
    console.log(timer);
    
    if(timer === 5) {
        clearInterval(a)
        console.log("timer closed");
        
    }
},1000)