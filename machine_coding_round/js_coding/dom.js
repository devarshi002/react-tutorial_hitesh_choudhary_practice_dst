const btn = document.getElementById("btn")
btn.textContent="Clicked"
btn.addEventListener("click",()=>{
    console.log("Clicked");
    
})


//create ele

const div = document.createElement("div");
div.textContent="hello"

document.body.appendChild(div)