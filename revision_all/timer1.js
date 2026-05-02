let count = 0;

var timer = setInterval(()=>{
    count++
    console.log(count);
    
    if(count == 5){
        clearInterval(timer)
        console.log("count closed");
        
    }
},1000)