let count = 0;

const checkCount = setInterval(()=>{
    count++;
    console.log(count);
    if(count==3)
        clearInterval(checkCount);
    
},1000)