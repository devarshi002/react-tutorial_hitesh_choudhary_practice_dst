let count = 0;

const timer = setInterval(()=>{
    count++;
    console.log(count);

    if(count==10){
        clearInterval(timer)
        console.log("timer stopped");
    }
        
    
    
},1000)