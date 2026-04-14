let count = 0;

let timer = setInterval(()=>{
    count++;
    console.log(count);
    
    if(count==5) {
        clearInterval(timer);
        console.log("timer stop");
        
    }
    
    
},1000)