//callback

function fetchData(callback) {
    setTimeout(()=>{
        callback("data received")
    },1000)
}

fetchData((data)=>{
    console.log(data);
    
})


const getData = new Promise((res, rej) => {
    setTimeout(() => {
        res("data received");
    }, 1000);
});

getData
  .then(data => {
      console.log(data);
  })
  .catch(err => {
      console.log(err);
  });    
//async await

async function leloData() {
    const data = await fetchData();
    console.log(data);
    
}

leloData()