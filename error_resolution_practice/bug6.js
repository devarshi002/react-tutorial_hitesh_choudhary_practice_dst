function fetchData() {
    
    setTimeout(()=>{
        return "data received"
    },1000)
}

console.log(fetchData());

// ==============callback======================

function fetchData(callback) {
    setTimeout(()=>{
        callback("data received")
    },1000)
}

fetchData((data)=>{
    console.log(data);
    
})

//==============Promises======================

function fetchData() {
    return new Promise((reslove)=>{
        setTimeout(()=>{
            reslove("data received")
        },1000)
    })
}

fetchData().then(data=>console.log(data));


//============ async await======================

function fetchData() {
    return new Promise((res)=>{
        setTimeout(()=>{
            res("data received")
        },1000)
    })
}

async function  getData() {
    const data = await fetchData();
    console.log(data);
    
}

getData()