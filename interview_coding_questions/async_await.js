//before asyn await

function fetchData() {
    fetch("https://api.com/data")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            
        })

        .catch(err=>console.log(err)
        );
}


//after async await

async function getData(params) {
    try{
        const res = await fetch("https://api.com/data");
        const data = await res.json();
        console.log(data);
    }
    catch (err) {
        console.log(err);
        
    }
}



//before

function fetchData() {
    fetch("https://api.com/data")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            
        })

        .catch(err=>console.log(err)
        );
}



async function getData(params) {
    try{
        const res= await fetch("https://api.com/getdata");
        const data = await res.json();
        console.log(data);
        
    } catch (err){
        console.log(err);
        
    }
}