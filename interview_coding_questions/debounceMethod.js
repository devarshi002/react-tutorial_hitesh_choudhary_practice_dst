function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(()=>{
            fn.apply(this, args)
        }, delay)
    }
}


function search(q){
    console.log("Searching :", q);
    
}

const debounceSearch = debounce(search,500)

debounceSearch("h")
debounceSearch("he")
debounceSearch("hel")
debounceSearch("hell")
debounceSearch("hell0")
debounceSearch("hell0ji")