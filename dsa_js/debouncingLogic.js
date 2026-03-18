function debounce(fn, delay) {
    let timer; //store timeout id

    return function (...args) {
        clearTimeout(timer); //cancel previous call
        
        timer = setTimeout(()=>{
            fn.apply(this, args); //call original function
        }, delay)
    };
}

function search(value) {
    console.log("Api call", value);
    
}

const debounceSearch = debounce(search, 500);

debounceSearch("r");
debounceSearch("re");
debounceSearch("rea");
debounceSearch("react");


const str = "programming"

const result = [...new Set(str)].join("");

console.log(result);



function removeDuplicate(str) {
    let result = ""
    for (let i=0; i<str.length; i++) {
        if(!result.includes(str[i])) {
            result +=str[i]
        }
    }
    return result
}

console.log(removeDuplicate("programming"));



function removeDuplicates(str) {
    let map = {}
    let result = ""

    for (let i = 0; i<str.length; i++) {
        if(!map[str[i]]) {
            map[str[i]] = true;
            result +=str[i]
        }
    }
    return result;
}

console.log(removeDuplicates("hello"));
